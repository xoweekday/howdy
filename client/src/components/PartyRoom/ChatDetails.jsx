import React from 'react';

const ChatDetails = ({ partyInfo }) => {
  return (
    <div className="container party-details">
      <h4>Details:</h4>
      <div className="details">
          {partyInfo.details}
      </div>
    </div>
  );
}

export default ChatDetails;