import React from 'react';
import { Link } from 'react-router-dom';

const PartyListItem = ({ party }) => (

  // Render individual party details.
  <div>
    <div className="partyContainer" className="container">
      <div className="row">
        {console.dir(party)}
        <div className="partyName" className="col">{party.name}</div>
        <div className="partyDistance" className="col">{party.host_location}</div>
        <div className="partySize" className="col">{party.start}</div>
        <div className="partyHost" className="col">{party.end}</div>
        <div className="partyStartTime" className="col">{party.radius}</div>
        <div className="partyEndTime" className="col">{party.details}</div>
        <div className="partyLink" className="col">
        <Link to={{ pathname: '/chatroom' }}>
          <button type="button" className="btn btn-primary">
            Join Party
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PartyListItem;
