import React from 'react';
import PropTypes from 'prop-types';

const ChatHeader = ({ partyInfo }) => (
  <div className="container">
    <h3>
      {'Welcome to '}
      {partyInfo.name}
    </h3>
  </div>
);

ChatHeader.propTypes = {
  partyInfo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ])),
};

ChatHeader.defaultProps = {
  partyInfo: {},
};

export default ChatHeader;
