import React from 'react';
import { Link } from 'react-router-dom';
import ChatMessage from './ChatMessage.jsx';
import ChatInput from './ChatInput.jsx';
import ImageUpload from './ImageUpload.jsx';


const Messages = ({
  messages, message, sendMessage, setMessage, leftParty, sendUrl,
}) => (
  <div className="container-fluid d-flex-col">
    <div className="row message-container overflow:auto">
      <ChatMessage messages={messages} />
    </div>
    <div className="row message-input">
      <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage} />
      <ImageUpload sendUrl={sendUrl} />
    </div>
    <div className="row leave-party">
      <Link to={{ pathname: '/parties' }}>
        <button type="button" className="btn btn-primary" onClick={leftParty}>Leave Party</button>
      </Link>
    </div>
  </div>
);

export default Messages;
