import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage.jsx';
import ChatInput from './ChatInput.jsx';
import ImageUpload from './ImageUpload.jsx';
import KickUser from './KickUser.jsx';
import DeleteAll from './DeleteAll.jsx';

const Messages = ({
  messages, message, sendMessage, setMessage, leftParty, sendUrl, deleteMessage, deleted, users, kickUser, partyInfo, username, userId, sendPrivateMessage,
}) => (
  <div className="container-fluid d-flex-col">
    <div className="row message-container overflow:auto">
      <ChatMessage
        messages={messages}
        deleteMessage={deleteMessage}
        deleted={deleted}
        isMod={userId === partyInfo.host_id}
      />
    </div>
    <div className="row message-input">
      <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage} users={users} sendPrivateMessage={sendPrivateMessage} />
      <ImageUpload sendUrl={sendUrl} />
    </div>
    <div className="row leave-party">
      <Link to={{ pathname: '/parties' }}>
        <button type="button" className="btn btn-primary" onClick={leftParty}>Leave Party</button>
      </Link>
    </div>
    <div className="row">
      <div className="col-5">
        {userId === partyInfo.host_id
          && (
            <DeleteAll
              users={users.filter((user) => user.userId !== partyInfo.host_id)}
              deleteMessage={deleteMessage}
              messages={messages}
            />
          )}
      </div>
      <div className="col-5">
        {userId === partyInfo.host_id
          && (
            <KickUser
              users={users.filter((user) => user.userId !== partyInfo.host_id)}
              kickUser={kickUser}
            />
          )}
      </div>
    </div>
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  message: PropTypes.string,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func,
  leftParty: PropTypes.func,
  sendUrl: PropTypes.func,
};
Messages.defaultProps = {
  messages: [],
  message: '',
  sendMessage: () => {},
  setMessage: () => {},
  leftParty: () => {},
  sendUrl: () => {},
};
export default Messages;
