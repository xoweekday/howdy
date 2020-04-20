import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Axios from 'axios';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image_url: '',
      google_id: '',
      longitude: '0',
      latitude: '1',
      view: false,
      view2: false
    };
    this.responseGoogle = this.responseGoogle.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
  }

  responseGoogle(response) {
    console.log(response);
    this.setState({
      name: response.profileObj.name,
      image_url: response.profileObj.imageUrl,
      google_id: response.googleId,
      view: true,
    });
    this.props.getUserInfo(this.state);
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          view2: true
         });
         Axios.post('api/login', this.state)
        .then((res)=> { console.log(res); })
        .catch((err)=> { console.log(err); })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    const { name, image_url, view, view2 } = this.state;
    return (
      <div className="loginGoogle">
        <h1>WELCOME TO HOWDY</h1>
        {view === false ?
        <div>
          <h4>Please sign in with Google: </h4>
          <GoogleLogin
            clientId="803513597131-flgnf4p6qarf2arn1003grv98m8vn21q.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          /> 
        </div> : null
        }
        {view === true ? 
        <div className="loginSigned" align="center">
          <h3>You have signed in as:</h3>
          <div>{name}</div>
          <div><img src={image_url}/></div>
          {view2 === false ? 
          <button className="btn btn-primary" onClick={this.getUserLocation}> Click here to allow your location! </button>  
          :
          <Link to={{ pathname: '/parties' }}>
            <button className="btn btn-primary" > Continue to Parties Page! </button>
          </Link>
          }
          <div> Or enter your zip code! </div>
          <input placeholder="zip code" />
          <Link to={{ pathname: '/parties' }}>
            <button className="btn btn-primary"> Submit </button>  
          </Link>
        </div> : null
        }
      </div>
    )
  }
}

export default LogIn;