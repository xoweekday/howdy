import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Parties from './PartyCreation/Parties.jsx';
import Login from './Login/Login.jsx';
import Chatroom from './PartyRoom/ChatRoom.jsx';
import GoogleLogin from 'react-google-login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partyInfo: {},
      userInfo: {},
      view: false
    };
    this.getPartyInfo = this.getPartyInfo.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
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
    console.log(response.profileObj);
    this.setState({
      userInfo: response.profileObj,
    })
  }

  render() {
    const { partyInfo, userInfo, view } = this.state;
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
          <Route exact path="/" render={(routerProps) => (<Login {...routerProps} getUserInfo={this.getUserInfo} />)} />
          <Route exact path="/parties" render={(routerProps) => (<Parties {...routerProps} getPartyInfo={this.getPartyInfo}/>)} />
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
