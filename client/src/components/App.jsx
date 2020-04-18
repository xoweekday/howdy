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
    };
    this.getPartyInfo = this.getPartyInfo.bind(this);
  }

  getPartyInfo(partyInfo) {
    console.log('here is the party info: ', partyInfo);
    this.setState({ partyInfo });
  }

  render() {
    const { partyInfo } = this.state;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/parties" render={(routerProps) => (<Parties {...routerProps} getPartyInfo={this.getPartyInfo}/>)} />
          <Route exact path="/chatroom" render={(routerProps) => (<Chatroom {...routerProps} partyInfo={partyInfo}/>)} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
