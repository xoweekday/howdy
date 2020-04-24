import React from 'react';

const ChatDetails = ({ partyInfo }) => {
  return (
    <div className="container party-details">
      <h5>Details:</h5>
      <div className="details">
          {partyInfo.details}
      </div>
    </div>
  );
}

export default ChatDetails;