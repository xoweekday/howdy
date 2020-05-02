import React from 'react';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GoogleLogin from 'react-google-login';
import Axios from 'axios';
import Parties from './PartyCreation/Parties.jsx';
import Login from './Login/Login.jsx';
import Chatroom from './PartyRoom/ChatRoom.jsx';
import { originalTheme, darkTheme, vaporWave, pixelArt } from '../themes.jsx';
import { GlobalStyles } from '../Global.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partyInfo: {},
      userInfo: {},
      view: false,
      longitude: '',
      latitude: '',
      city: '',
      region: '',
      redirect: false,
      theme: 'original',
    };
    this.getPartyInfo = this.getPartyInfo.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.getUserLocationFromDB = this.getUserLocationFromDB.bind(this);
    this.getLocationFromLogin = this.getLocationFromLogin.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        view: true,
      });
      const { userInfo } = this.state;
      if (!userInfo.name) {
        this.setRedirect();
      }
    }, 1000);
  }

  getPartyInfo(partyInfo) {
    this.setState({ partyInfo });
  }

  getUserInfo(userInfo) {
    this.setState({ userInfo });
  }

  getLocationFromLogin(latitude, longitude, city, region) {
    this.setState({
      latitude, longitude, city, region,
    });
  }

  getUserLocationFromDB() {
    const { userInfo } = this.state;
    Axios.get('/api/login', { params: { google_id: userInfo.googleId } })
      .then((res) => {
        console.log(res.data[0].id);
        this.setState({ longitude: res.data[0].longitude, latitude: res.data[0].latitude, userId: res.data[0].id });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setRedirect() {
    this.setState({
      redirect: true,
    });
  }

  responseGoogle(response) {
    console.log('SECOND LOGIN');
    this.setState({
      userInfo: response.profileObj,
    });
    this.getUserLocationFromDB();
    const { userInfo } = this.state;
    if (!userInfo.name) {
      this.setState({
        redirect: true,
      });
    }
  }

  renderRedirect() {
    const { redirect } = this.state;
    if (!redirect) {
      return null;
    }
    return <Redirect to="/" />;
  }

  setTheme(theme) {
    this.setState({ theme });
  }

  getTheme() {
    const { theme } = this.state;
    switch (theme) {
      case 'original':
        return originalTheme;
      case 'dark':
        return darkTheme;
      case 'chill':
        return vaporWave;
      case 'pixel cutie':
        return pixelArt;
    }
  }

  render() {
    const {
      partyInfo, userInfo, view, longitude, latitude, city, region, userId, theme,
    } = this.state;
    let renderContainer = (
      <div>
        <div className="hideMe">
          <GoogleLogin
            clientId="847322546124-r3jf05c1p89vlk3g6jbrbsv0632mh4go.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.setRedirect}
            isSignedIn
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    );
    if (view) {
      renderContainer = (
        <HashRouter>
          {this.renderRedirect()}
          <Switch>
            <Route exact path="/" render={() => (<Login getUserInfo={this.getUserInfo} getLocationFromLogin={this.getLocationFromLogin} />)} />
            <Route exact path="/parties" render={() => (<Parties longitude={longitude} latitude={latitude} city={city} region={region} getPartyInfo={this.getPartyInfo} imageUrl={userInfo.image_url} userId={userId || userInfo.userId} />)} />
            <Route exact path="/chatroom" render={() => (<Chatroom partyInfo={partyInfo} username={userInfo.name} userId={userId || userInfo.userId} setTheme={this.setTheme} />)} />
          </Switch>
        </HashRouter>
      );
    }
    return (
      <ThemeProvider theme={this.getTheme()}>
        <>
          <GlobalStyles />
          {renderContainer}
        </>
      </ThemeProvider>
    );
  }
}

export default App;
