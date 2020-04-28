import React from 'react';
import PropTypes from 'prop-types';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';
import KickUser from './KickUser.jsx';
import DeleteAll from './DeleteAll.jsx';

const ChatSidebar = ({ users, partyInfo, username, kickUser, messages, deleteMessage }) => {
  return (
    <div className="container-fluid sidebar-container">
      <div className="row d-flex-col">
        <ChatDetails partyInfo={partyInfo} />
        <ChatPeopleList users={users} username={username} />
        {username === partyInfo.hostname && 
          (
            <KickUser
              users={users.filter((user) => user.name !== partyInfo.hostname)}
              kickUser={kickUser}
            />
          )}
          {username === partyInfo.hostname && 
          (
            <DeleteAll
              users={users.filter((user) => user.name !== partyInfo.hostname)}
              deleteMessage={deleteMessage}
              messages={messages}
            />
          )}
      </div>
    </div>
  );
};

ChatSidebar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  partyInfo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ])),
  username: PropTypes.string,
};

ChatSidebar.defaultProps = {
  users: [],
  partyInfo: {},
  username: '',
};

export default ChatSidebar;
