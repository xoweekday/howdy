import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Parties from './PartyCreation/Parties.jsx';
import Login from './Login/Login.jsx';
import Chatroom from './PartyRoom/ChatRoom.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partyInfo: {},
      userInfo: {name: `${Math.floor(Math.random()*100)}`},
    };
    this.getPartyInfo = this.getPartyInfo.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getPartyInfo(partyInfo) {
    this.setState({ partyInfo });
  }

  getUserInfo(userInfo) {
    this.setState({ userInfo });
  }

  render() {
    const { partyInfo, userInfo } = this.state;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={(routerProps) => (<Login {...routerProps} getUserInfo={this.getUserInfo} />)} />
          <Route exact path="/parties" render={(routerProps) => (<Parties {...routerProps} getPartyInfo={this.getPartyInfo}/>)} />
          <Route exact path="/chatroom" render={(routerProps) => (<Chatroom {...routerProps} partyInfo={partyInfo} username={userInfo.name} />)} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
