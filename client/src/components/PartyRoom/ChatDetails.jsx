import React from 'react';

const ChatDetails = ({ partyInfo }) => {
  return (
    <div className="container party-details">
      <h3>Party Details:</h3>
      <div className="details">
          {partyInfo.details}
      </div>
    </div>
  );
}

export default ChatDetails;