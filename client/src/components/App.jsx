import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Parties from './PartyCreation/Parties.jsx';
import Login from './Login/Login.jsx';
import Chatroom from './PartyRoom/ChatRoom.jsx';
import GoogleLogin from 'react-google-login';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partyInfo: {},
      userInfo: {},
      view: false,
      longitude: '',
      latitude: '',
    };
    this.getPartyInfo = this.getPartyInfo.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.getUserLocationFromDB = this.getUserLocationFromDB.bind(this);
    this.getLocationFromLogin = this.getLocationFromLogin.bind(this);
  }

  getPartyInfo(partyInfo) {
    this.setState({ partyInfo });
  }

  getUserInfo(userInfo) {
    this.setState({ userInfo });
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({
        view: true
      })
    }.bind(this), 1000)
  }

  responseGoogle(response) {
    this.setState({
      userInfo: response.profileObj,
    })
    this.getUserLocationFromDB();
  }

  getLocationFromLogin(latitude, longitude) {
    this.setState({ latitude, longitude });
  }

  getUserLocationFromDB() {
    const { userInfo } = this.state;
    Axios.get('/api/login', { params: { google_id: userInfo.googleId } })
      .then((res)=> {
        this.setState({ longitude: res.data[0].longitude, latitude: res.data[0].latitude});
      })
      .catch((err)=> { console.log(err); })
  }

  render() {
    const { partyInfo, userInfo, view, longitude, latitude } = this.state;
    let renderContainer =
    <div>
      <div className="hideMe">
        <GoogleLogin
          clientId="803513597131-flgnf4p6qarf2arn1003grv98m8vn21q.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={() => console.log('failed to login')}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
          />
      </div>
    </div>
    if (view) {
      renderContainer =
      <HashRouter>
        <Switch>
          <Route exact path="/" render={(routerProps) => (<Login {...routerProps} getUserInfo={this.getUserInfo} getLocationFromLogin={this.getLocationFromLogin}/>)} />
          <Route exact path="/parties" render={(routerProps) => (<Parties {...routerProps} longitude={longitude} latitude={latitude} getPartyInfo={this.getPartyInfo} />)} />
          <Route exact path="/chatroom" render={(routerProps) => (<Chatroom {...routerProps} partyInfo={partyInfo} username={userInfo.name} />)} />
        </Switch>
      </HashRouter>
    }
    return(
      renderContainer
    );
  }
}

export default App;
