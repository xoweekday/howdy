import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Parties from './PartyCreation/Parties.jsx';
import Login from './Login/Login.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/parties" render={(routerProps) => (<Parties {...routerProps} />)} />
          {/* <Route exact path="/parties" render={(routerProps) => (<Parties {...routerProps} />)} /> */}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;