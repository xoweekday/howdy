import React from 'react';
import PartyListItem from './PartyListItem.jsx';

class PartyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div>
        <h3>Party List</h3>
        <PartyListItem ></PartyListItem>
      </div>
    );
  }
}

export default PartyList;