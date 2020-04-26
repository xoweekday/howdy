import React from 'react';
import PropTypes from 'prop-types';

const ChatDetails = ({ partyInfo }) => (
  <div className="container party-details">
    <h5>Details:</h5>
    <div className="details">
      {partyInfo.details}
    </div>
  </div>
);

ChatDetails.propTypes = {
  partyInfo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ])),

};

ChatDetails.defaultProps = {
  partyInfo: {},

};

export default ChatDetails;
