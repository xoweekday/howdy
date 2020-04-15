import React from 'react';
import PartyListItem from './PartyListItem.jsx';
import axios from 'axios';
class PartyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      parties: [],
    };
  }

  componentDidMount() {
    this.getParties();
  }

  //Get Parties from DB 
  getParties() {
    axios.get('/api/homepage')
      .then(response => this.setState({ parties: response.data }))
      .catch(error => { throw error })
  }

  //Get Distance Function
  getDistance(userInfo) {
    //take the user's location, and the location of each party in the database. 
    //if the user's location is within the specified range, show the party details and the distance between user and party. 

  }

  //we only render parties that are in the user's range. 
  render() {
    return (
      <div>
        <h1>Parties near you!</h1>
        <div className='partyContainer' className='container'>
          <div className="row">
            <div className='col'><h4>Party Name</h4></div>
            <div className='col'><h4>Location</h4></div>
            <div className='col'><h4>Start Time</h4></div>
            <div className='col'><h4>Party Details</h4></div>
            <div className='col'><h4>Party Details</h4></div>
            <div className='col'><h4>Party Details</h4></div>
            <div className='col'><h4>Link to Join</h4></div>
          </div>
        </div>
        {this.state.parties.map((party) =>
          <PartyListItem key={party.id} party={party} ></PartyListItem>
        )}
      </div>
    );
  }
}

export default PartyList;