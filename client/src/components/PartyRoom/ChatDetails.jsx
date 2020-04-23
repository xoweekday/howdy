import React from 'react';

const ChatDetails = ({ partyInfo }) => {
  return (
    <div className="container party-details">
      <h3>Details:</h3>
          {partyInfo.details}
      <div className="details">
      </div>
    </div>
  );
}

export default ChatDetails;