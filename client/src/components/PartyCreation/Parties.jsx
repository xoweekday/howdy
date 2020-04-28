import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import CreateParty from './CreateParty.jsx';
import PartyList from './PartyList.jsx';
import { currentPartiesSorted } from '../../Utils/time.js';

class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
      redirect: false,
    };
    this.getNewPartyEntry = this.getNewPartyEntry.bind(this);
    this.logout = this.logout.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount() {
    const { imageUrl } = this.props;
    this.getParties();
    if (!imageUrl) {
      this.setState({
        redirect: true,
      });
    }
  }

  //  Get Parties from DB
  getParties() {
    axios.get('/api/homepage')
      .then((response) => {
        this.setState({ parties: currentPartiesSorted(response.data) });
      })
      .catch((error) => { throw error; });
  }

  // Get newly create party
  getNewPartyEntry() {
    this.getParties();
  }

  setRedirect() {
    this.setState({
      redirect: true,
    });
  }

  logout() {
    this.setRedirect();
  }

  renderRedirect() {
    const { redirect } = this.state;
    return redirect ? <Redirect to="/" /> : null;
  }

  render() {
    const { parties } = this.state;
    const {
      getPartyInfo,
      longitude,
      latitude,
      imageUrl,
      city,
      region,
      userId,
    } = this.props;
    return (
      <div>
        {this.renderRedirect()}
        <div>
          <div className="container d-flex logout-bar">
            <div className="row">
              <div className="logoutGoogle row">
                <img className="logout-image" src={imageUrl} alt="" />
                <GoogleLogout
                  clientId="803513597131-flgnf4p6qarf2arn1003grv98m8vn21q.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={this.logout}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid parties-page">
          <div className="row" />
          <div className="row">
            <div className="col create">
              <CreateParty
                getNewPartyEntry={this.getNewPartyEntry}
                longitude={longitude}
                latitude={latitude}
                city={city}
                region={region}
              />
            </div>
            <div className="col list">
              <PartyList
                parties={parties}
                getPartyInfo={getPartyInfo}
                longitude={longitude}
                latitude={latitude}
                userId={userId}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Parties.propTypes = {
  imageUrl: PropTypes.string,
  getPartyInfo: PropTypes.func,
  longitude: PropTypes.string,
  latitude: PropTypes.string,
  city: PropTypes.string,
  region: PropTypes.string,
};

Parties.defaultProps = {
  imageUrl: '',
  getPartyInfo: () => {},
  longitude: '',
  latitude: '',
  city: '',
  region: '',
};

export default Parties;
