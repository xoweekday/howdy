import React from 'react';
import ChatMessage from './ChatMessage.jsx';
import ChatInput from './ChatInput.jsx';

const Messages = ({ messages, message, sendMessage, setMessage }) => {
  return (
    <div className="container">
      <ChatMessage messages={messages} />
      <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage} />
    </div>
  );
}

export default Messages;
