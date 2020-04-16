import React from 'react';
const ChatBoard = ({ messages }) => (
  <div>
    {messages.map((message) =>
      <div key={message.id}>{message.message}</div>
    )}
  </div>
);
export default ChatBoard;
