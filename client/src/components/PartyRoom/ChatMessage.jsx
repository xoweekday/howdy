import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from '../../../dist/icons8-delete-48.png';

const ChatMessage = ({ messages, deleted, deleteMessage }) => {
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
              <div className="message">
                <div className="message-text" key={i}>
                  {message.user}
                  {': '}
                  {message.text}
                </div>
                <img src={deleteIcon} className="delete-icon" onClick={() => deleteMessage(message)} />
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
  deleteMessage: PropTypes.func,
};

ChatMessage.defaultProps = {
  messages: [],
  deleted: [],
};

export default ChatMessage;
