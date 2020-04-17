import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';



// function onSignIn(googleUser) {
//   const [name, setName] = useState('');
//   // Useful data for your client-side scripts:
//   var profile = googleUser.getBasicProfile();
//   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//   console.log('Full Name: ' + profile.getName());
//   console.log('Given Name: ' + profile.getGivenName());
//   console.log('Family Name: ' + profile.getFamilyName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail());

//   console.log(googleUser);
//   setName(googleUser.profileObj.name);
//   // The ID token you need to pass to your backend:
//   var id_token = googleUser.getAuthResponse().id_token;
//   console.log("ID Token: " + id_token);
// }



const LogIn = ({ props }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setImageUrl(response.profileObj.imageUrl);
  }
  
  return (
    <div>
      {/* <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div> */}
      <GoogleLogin
        clientId="803513597131-sm1rmc2bobnambuak7u7b75a7kh61g6i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <Link to={{ pathname: '/parties' }}>
        <button>
          Google sucks. Just click here for now to get to parties.
        </button>
      </Link>
      <div>{name}</div>
      <div><img src={imageUrl}/></div>
    </div>
  )
}

export default LogIn;