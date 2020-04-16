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
      <div>
      <h1>Parties Page</h1>
        <div>
          <h2>Create Party</h2>
          <CreateParty ></CreateParty>
        </div>
        <div>
          <h2>Parties Near You</h2>
          <PartyList ></PartyList>
        </div>
      </div>
    );
  }
}

export default Parties;