import React from 'react';
import PartyListItem from './PartyListItem.jsx';

const PartyList = ({ parties, getPartyInfo, longitude, latitude }) => (
  <div className="party-list">
      <h3>Find a Party in Your Neighborhood</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col"><h4>Party</h4></div>
          <div className="col"><h4>Date</h4></div>
          <div className="col"><h4>Start</h4></div>
          <div className="col"><h4>Location</h4></div>
          <div className="col"><h4>Distance</h4></div>
          <div className="col"><h4>Info</h4></div>
          <div className="col"><h4> </h4></div>
        </div>
      </div>
      <div className="items-list">
      {parties.map((party) => <PartyListItem key={party.id} party={party} getPartyInfo={getPartyInfo} longitude={longitude} latitude={latitude} />)}
    </div>
    </div>
  );

export default PartyList;
