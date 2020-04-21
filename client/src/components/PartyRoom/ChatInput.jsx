import React from 'react';

const ChatInput = ({ message, sendMessage, setMessage }) => (
  <div className="container">
    <div className="row">
      <div className="send-a-message-box col-md-10">
        <div className="form-group">
          {/* When Refactoring styles, put send message button inline with input field. */}
          <input
            type="text"
            className="form-control"
            placeholder="ChatBoard: enter message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
          ></input>
        </div>
      </div>
      <div className="col-md-2"><button
        type="button"
        className="btn btn-primary form-control"
        onClick={(event) => sendMessage(event)}
      >SEND</button></div>
    </div>
  </div>
)

export default ChatInput;