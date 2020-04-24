import React from 'react';

const ChatMessage = ({ messages }) => (
  <div className="messages">
    {messages.map((message, i) => {
      if(message.text) {
        return <div key={i}>{message.user}: {message.text}</div>
      } else {
        return <div key={i}>{message.user}: <img className="img-fluid"  style={{width: "30%"}} src={message.img} /></div>
      }
    })}
  </div>
)

export default ChatMessage;