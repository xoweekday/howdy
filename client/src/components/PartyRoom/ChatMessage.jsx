import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ messages, deleted, deleteMessage }) => {
  console.log(deleted);
  return (
    <div className="messages">
      {messages
        .filter((message) => !deleted.some((del) => 
          `${message.user}${message.text}${message.time}` === del ||
          `${message.user}${message.img}${message.time}` === del
          ))
        .map((message, i) => {
          if (message.text) {
            return (
              <div key={i} onClick={() => deleteMessage(message)}>
                {message.user}
                {': '}
                {message.text}
              </div>
            );
          }
          return (
            <div key={i}>
              {message.user}
              {': '}
              <img
                className="img-fluid"
                style={{ width: '30%' }}
                src={message.img}
                alt=""
              />
            </div>
          );
        })}
    </div>
  );
};

ChatMessage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleted: PropTypes.arrayOf(PropTypes.string),
};

ChatMessage.defaultProps = {
  messages: [],
  deleted: [],
};

export default ChatMessage;
