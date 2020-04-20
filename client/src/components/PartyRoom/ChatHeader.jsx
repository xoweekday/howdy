import React from 'react';

const ChatHeader = ({ partyInfo }) => (
  <div>
    <div className="row">
        <h3>Welcome to the {partyInfo.name}</h3>
      </div>
      <div>
        <h5>Party Details:</h5>
        <p>{partyInfo.details}</p>
      </div>
  </div>
)

export default ChatHeader;