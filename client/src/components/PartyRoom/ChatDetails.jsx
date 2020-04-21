import React from 'react';

const ChatDetails = ({ partyInfo }) => {
  return (
    <div>
      <h3>Party Details:</h3>
      {partyInfo.details}
    </div>
  );
}

export default ChatDetails;