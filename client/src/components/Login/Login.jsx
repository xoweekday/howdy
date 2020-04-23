import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import IPinfo from "node-ipinfo";
import Axios from 'axios';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image_url: '',
      google_id: '',
      latitude: '',
      longitude: '',
      city: '',
      region: '',
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
    var token = "d7336b6238ccfc"
    var ip = "geo"
    var asn = "AS7922";
    var ipinfo = new IPinfo(token);
    ipinfo.lookupIp(ip)
    .then((response) => {
      var loc = response.loc.split(',');
      console.log({ response });
      this.props.getLocationFromLogin(loc[0], loc[1], response._city, response.region);
      this.setState({
          latitude: loc[0],
          longitude: loc[1],
          city: response._city,
          region: response.region,
          view2: true
      });
        Axios.post('api/login', this.state)
        .then((res)=> { console.log(res); })
        .catch((err)=> { console.log(err); })
    })
    .catch((error) => {
    console.log(error);
    });
  }

  render() {
    const { name, image_url, view, view2 } = this.state;
    return (
      <div className="loginGoogle">
        <h4 className="loginDescription loginPara">
        <h1 className="loginTitle loginColor">♥ HOWDY ♥</h1>
        <h2 className="loginColor"> get to know your neighbors </h2>
          <span className="firstSpan"> When you're stuck inside, it can feel lonely.</span>
          <span> Why not throw an online party? </span>
          <span className="lastSpan"> Howdy connects neighbors based on their location. </span>
        </h4>
        {view === false ?
        <div>
          <GoogleLogin
            clientId="803513597131-flgnf4p6qarf2arn1003grv98m8vn21q.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div> : null }
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