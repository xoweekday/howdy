import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import distance from '../../Utils/LocationEquation.js';
import Moment from 'react-moment';

const PartyListItem = ({ party, getPartyInfo, longitude, latitude }) => {
  const [ redirect, setRedirect ] = useState(false);

  const joinParty = () => {
    setRedirect(true);
  }

  const renderParty = () => {
    if(redirect){
      return <Redirect to='/chatroom' />
    }
  }

  const canJoinParty = () => {
    const distanceFromParty = distance(party.host_lat, party.host_long, latitude, longitude);

    if (distanceFromParty <= party.radius) {
      joinParty();
    } else {
      alert(`
      You are ${Math.round(10*distanceFromParty)/10} mile(s) away from this party.
      The host has invited people within ${party.radius} mile(s).
      `)
      }
    getPartyInfo(party)
  }

  return (
    <div>
      {renderParty()}
      <div className="party-container container-fluid border">
        <div className="row party-list-item">
          <div className="partyName col">{party.name}</div>
          <div className="partyStart col"><Moment parse="HH:mm:ss" format="hh:mm a" >{party.start}</Moment></div>
          <div className="partyEnd col"><Moment parse="HH:mm:ss" format="hh:mm a" >{party.end}</Moment></div>
          <div className="partyEnd col">{party.city}</div>
          <div className="partyEnd col">{party.radius}</div>
          <div className="partyDetails col" >{party.details}</div>
          <div className="partyLink col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={canJoinParty}
              >Join Party</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PartyListItem;
