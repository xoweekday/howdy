import React from 'react';

const ChatHeader = ({ partyInfo }) => (
  <div className="container">
    <h3>Welcome to the {partyInfo.name}</h3>
  </div>
)

export default ChatHeader;