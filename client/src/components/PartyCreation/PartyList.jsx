import React from 'react';
import PartyListItem from './PartyListItem.jsx';
import Parties from './Parties.jsx';

class PartyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      parties: [{},{},{}],
    };
  }

  render() {
    return (
      <div>
        <h3>Party List</h3>
        {Parties.map(( party ) =>
          <PartyListItem ></PartyListItem>
        )}
      </div>
    );
  }
}

export default PartyList;