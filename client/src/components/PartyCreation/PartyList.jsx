import React from 'react';
import axios from 'axios';
import PartyListItem from './PartyListItem.jsx';

class PartyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
  }

  componentDidMount() {
    this.getParties();
  }

  //  Get Parties from DB
  getParties() {
    axios.get('/api/homepage')
      .then((response) => this.setState({ parties: response.data }))
      .catch((error) => { throw error; });
  }

  //  we only render parties that are in the user"s range.
  render() {
    const { parties } = this.state;
    return (
      <div>
        <h1>Parties near you!</h1>
        <div className="partyContainer container">
          <div className="row">
            <div className="col"><h4>Party Name</h4></div>
            <div className="col"><h4>Location</h4></div>
            <div className="col"><h4>Start Time</h4></div>
            <div className="col"><h4>Party Details</h4></div>
            <div className="col"><h4>Party Details</h4></div>
            <div className="col"><h4>Party Details</h4></div>
            <div className="col"><h4>Link to Join</h4></div>
          </div>
        </div>
        {parties.map((party) => <PartyListItem key={party.id} party={party} />)}
      </div>
    );
  }
}

export default PartyList;
