import React from 'react';
const ChatBoard = ({ messages, partyInfo }) => (
  <div className="container">

    <div className="row">
      <h3>Welcome to the {partyInfo.name}</h3>
    </div>

    <div className="row">
      <div className="messages-box col-md-12">
        {messages.map((message) =>
          <div className="message" key={message.id}>{message.message}</div>
        )}
      </div>
    </div>

    <div className="row">
      <div className="send-a-message-box col-md-12">
        <div class="form-group">
          <label for="send-a-message"></label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="howdy!"></input>
          <button type="button" class="btn btn-primary btn-lg btn-block">Send Message</button>

        </div>
      </div>
    </div>

  </div>
);
export default ChatBoard;
