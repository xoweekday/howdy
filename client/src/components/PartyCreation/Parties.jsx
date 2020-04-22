import React from 'react';
import PartyList from './PartyList.jsx';
import CreateParty from './CreateParty.jsx';
import axios from 'axios';
import { GoogleLogout } from 'react-google-login';


class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
    this.getNewPartyEntry = this.getNewPartyEntry.bind(this);
    // this.getPartyInfo = this.getPartyInfo.bind(this);
    this.logout = this.logout.bind(this);
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

  // Get newly create party
  getNewPartyEntry() {
    this.getParties();
  }

  logout() {
    console.log("You have logged out, dummy")
  }

  render() {
    const { parties } = this.state;
    const { getPartyInfo, longitude, latitude } = this.props;
    return (
      <div className="container-fluid parties-page">
      <GoogleLogout
      clientId="803513597131-flgnf4p6qarf2arn1003grv98m8vn21q.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={this.logout} >
        </GoogleLogout>
      <div className="row">
        </div>
      <div className="row">
        <div className="col create">
          <CreateParty getNewPartyEntry={this.getNewPartyEntry} longitude={longitude} latitude={latitude} />
        </div>
        <div className="col list">
          <PartyList parties={parties} getPartyInfo={getPartyInfo} />
        </div>
      </div>
      </div>
    );
  }
}

export default Parties;
