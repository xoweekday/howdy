import React from 'react';

const ChatMessage = ({ messages }) => (
  <div className="container">
    <div className="row">
      <div className="messages-box col-md-12">
        {messages.map((message, i) => <div key={i}>{message.user}: {message.text}</div>)}
      </div>
    </div>
  </div>
)

export default ChatMessage;