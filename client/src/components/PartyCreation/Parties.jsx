import React from 'react';
import PartyList from './PartyList.jsx';
import CreateParty from './CreateParty.jsx';

class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <h1>Parties Page</h1>
        </div>
      <div className="row">
        <div className="col">
          <h2>Create Party</h2>
          <CreateParty />
        </div>
        <div className="col">
          <h2>Parties Near You</h2>
          <PartyList />
        </div>
      </div>
      </div>
    );
  }
}

export default Parties;
