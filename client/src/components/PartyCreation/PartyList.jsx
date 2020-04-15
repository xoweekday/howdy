import React from 'react';
import PartyListItem from './PartyListItem.jsx';
import Parties from './Parties.jsx';

class PartyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      parties: [],
    };
  }

  //Get Parties from DB 
  getParties() {
    axios.get('/api/phrases')
    .then(response => this.setState({parties: response.data}))
    .catch(error => {throw error})
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
        <h3>Party List</h3>
        {/* {parties.map(( party ) => */}
        <PartyListItem ></PartyListItem>
        {/* )} */}
      </div>
    );
  }
}

export default PartyList;