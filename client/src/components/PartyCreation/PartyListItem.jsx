/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import distance from '../../Utils/LocationEquation.js';
import { thirtyMinBeforeTodaysParty, formatTime, formatDate } from '../../Utils/time.js';

const PartyListItem = ({
  party,
  getPartyInfo,
  longitude,
  latitude,
  userId,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [showModal, setModal] = useState(false);

  const joinParty = () => {
    setRedirect(true);
  };

  const renderParty = () => {
    if (redirect) {
      return <Redirect to="/chatroom" />;
    }
  };

  const canJoinParty = (date, start) => {
    axios.get(`/api/ban/${userId}/${party.id}`)
      .then((banned) => {
        if (!banned.data) {
          const distanceFromParty = distance(party.host_lat, party.host_long, latitude, longitude);
          if (distanceFromParty <= party.radius) {
            if (thirtyMinBeforeTodaysParty(date, start)) {
              if (!party.password ||
                  party.host_id === userId ||
                  prompt('The host has set a password. Please enter it now') === party.password) {
                getPartyInfo(party);
                joinParty();
              } else {
                alert('Incorrect password.');
              }
            } else {
              alert(`The party hasn't started yet. You can join 30 minutes before ${formatTime(start)} on ${formatDate(date)}`);
            }
          } else {
            alert(`
                You are ${Math.round(10 * distanceFromParty) / 10} mile(s) away from this party.
                The host has invited people within ${party.radius} mile(s).`);
          }
        } else {
          alert('You have been banned from this party.');
        }
      });
  };

  const {
    name,
    date,
    start,
    city,
    radius,
    details,
    region,
  } = party;
  return (
    <div>
      {renderParty()}
      <div className="party-container container-fluid border">
        <div className="row party-list-item">
          <div className="partyName col">{name}</div>
          <div className="partyName col"><Moment parse="YYYY-MM-DD" format="MMM D, YYYY">{date}</Moment></div>
          <div className="partyStart col"><Moment parse="HH:mm:ss" format="h:mm a">{start}</Moment></div>
          <div className="partyEnd col">
            {city}
            {', '}
            {region}
          </div>
          <div className="partyEnd col">{radius}</div>
          <div className="partyDetails col">{details}</div>
          <div className="partyLink col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => (canJoinParty(date, start))}
            >
              Join Party
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setModal(true)}
            >
              RSVP
            </button>
            <Modal size="lg" show={showModal} onHide={() => setModal(false)}>
              <Modal.Header closeButton>RSVP CONFIRMATION</Modal.Header>
              <Modal.Body>
                <p>Please input your phone number to receive a reminder</p>
                <input type="number" name="phone" placeholder="ex.123-123-1234" />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => showModal(false)}>No</Button>
                <Button variant="primary" onClick={() => showModal(false)}>Yes</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

PartyListItem.propTypes = {
  party: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ])),
  getPartyInfo: PropTypes.func,
  longitude: PropTypes.string,
  latitude: PropTypes.string,
};

PartyListItem.defaultProps = {
  party: {},
  getPartyInfo: () => {},
  longitude: '',
  latitude: '',
};

export default PartyListItem;
