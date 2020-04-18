import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom';
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
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    console.log(response);
    this.setState({
      name: response.profileObj.name,
      image_url: response.profileObj.imageUrl,
      google_id: response.googleId,
      view: true,
    });
    Axios.post('api/login', this.state)
      .then((res)=> { console.log(res); })
      .catch((err)=> { console.log(err); })
  }

  render() {
    const { name, image_url, view } = this.state;
    return (
      <div>
        {/* <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div> */}
        <GoogleLogin
          clientId="803513597131-sm1rmc2bobnambuak7u7b75a7kh61g6i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          // isSignedIn={true}
          cookiePolicy={'single_host_origin'}
          // uxMode="redirect"
          redirectUri="https://localhost:8080/#/parties"
        />
        {view === true
          ? 
          <div>
            <Link to={{ pathname: '/parties' }}>
              <button> Click here to allow your location! </button>  
            </Link>
          </div>
          :
          null
        }
        <div>{name}</div>
        <div><img src={image_url}/></div>
      </div>
    )
  }
}

export default LogIn;