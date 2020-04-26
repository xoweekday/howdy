import React from 'react';
import PropTypes from 'prop-types';

const ChatInput = ({ message, sendMessage, setMessage }) => (
  <div className="container-fluid">
    <div className="row d-flex-row">
      <div className="col-10 form-group">
        <input
          type="text"
          className="form-control"
          placeholder="ChatBoard: enter message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-primary form-control send-button"
          onClick={(event) => sendMessage(event)}
        >
          SEND
        </button>
      </div>
    </div>
  </div>
);

ChatInput.propTypes = {
  message: PropTypes.string,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func,
};

ChatInput.defaultProps = {
  message: '',
  sendMessage: () => {},
  setMessage: () => {},
};

export default ChatInput;
