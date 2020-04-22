import React from 'react';
import { Link } from 'react-router-dom';
import distance from '../../Utils/LocationEquation.js';

const PartyListItem = ({ party, getPartyInfo, longitude, latitude }) => (

  // Render individual party details.
  <div>
    <div className="party-container container-fluid border">
      <div className="row party-list-item">
        <div className="partyName" className="col">{party.name}</div>
        {/* <div className="partyDistance" className="col">{party.host_location}</div> */}
        <div className="partyStart" className="col">{party.start}</div>
        <div className="partyEnd" className="col">{party.end}</div>
        {/* <div className="partyRadius" className="col">{party.radius}</div> */}
        <div className="partyDetails" className="col">{party.details}</div>
        <div className="partyLink" className="col">
        <Link to={{ pathname: '/chatroom' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={()=>{
              const partyLat = party.host_lat;
              const partyLong = party.host_long;
              const userLat = latitude;
              const userLong = longitude;
              const distanceFromParty = distance(partyLat, partyLong, userLat, userLong)
              const partyRadius = party.radius;
              let canJoin = false;

              if(distanceFromParty <= partyRadius){
                canJoin = true;
              }

              console.log('ABLE TO JOIN? ', canJoin)
              console.log('DISTANCE FROM PARTY: ', Math.round(10*distanceFromParty)/10)
              getPartyInfo(party)
            }}
            >Join Party</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PartyListItem;
