import React from 'react';
import PartyList from './PartyList.jsx';
import CreateParty from './CreateParty.jsx';
import axios from 'axios';


class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
    this.getNewPartyEntry = this.getNewPartyEntry.bind(this);
    // this.getPartyInfo = this.getPartyInfo.bind(this);
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

  // getPartyInfo(info) {
  //   console.log('here is the party info: ', info);
  // }

  render() {
    const { parties } = this.state;
    const { getPartyInfo } = this.props;
    return (
      <div className="container parties-page">
      <div className="row">
        <h1>Parties Page</h1>
        </div>
      <div className="row">
        <div className="col create">
          <CreateParty getNewPartyEntry={this.getNewPartyEntry} />
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
