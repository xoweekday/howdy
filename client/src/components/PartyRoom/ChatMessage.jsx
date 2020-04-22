import React from 'react';

const ChatMessage = ({ messages }) => (
  <div className="container-fluid overflow:auto">
    {messages.map((message, i) => <div key={i}>{message.user}: {message.text}</div>)}
  </div>
)

export default ChatMessage;