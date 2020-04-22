import React from 'react';
import PartyList from './PartyList.jsx';
import CreateParty from './CreateParty.jsx';
import axios from 'axios';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom'


class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
      redirect: false,
    };
    this.getNewPartyEntry = this.getNewPartyEntry.bind(this);
    // this.getPartyInfo = this.getPartyInfo.bind(this);
    this.logout = this.logout.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
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
    this.setRedirect();
  }

  setRedirect() {
    this.setState({
      redirect: true
    })
  }

  renderRedirect () {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    const { parties } = this.state;
    const { getPartyInfo, longitude, latitude, imageUrl } = this.props;
    return (
      <div>
        {this.renderRedirect()}
      <div><img src={imageUrl}/>
      <div className="logoutGoogle">
      <GoogleLogout
      clientId="803513597131-flgnf4p6qarf2arn1003grv98m8vn21q.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={this.logout} >
        </GoogleLogout>
      </div>
      </div>
      <div className="container-fluid parties-page">
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
      </div>
    );
  }
}

export default Parties;
