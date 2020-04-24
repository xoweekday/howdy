import React from 'react';

const ChatMessage = ({ messages }) => (
  <div className="messages">
    {messages.map((message, i) => {
      if (message.text) {
        return (
          <div key={i}>
            {message.user}
            :
            {' '}
            {message.text}
          </div>
        );
      }
      return (
        <div key={i}>
          {message.user}
          :
          {' '}
          <img className="img-fluid" style={{ width: '30%' }} src={message.img} alt="" />
        </div>
      );
    })}
  </div>
);

export default ChatMessage;
