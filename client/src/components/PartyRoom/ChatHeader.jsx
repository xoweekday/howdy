import React from 'react';

const ChatHeader = ({ partyInfo }) => (
  <div className="container">
    <h3>Welcome to {partyInfo.name}</h3>
  </div>
)

export default ChatHeader;