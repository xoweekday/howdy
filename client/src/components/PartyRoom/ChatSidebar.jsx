import React from 'react';
import PropTypes from 'prop-types';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';
import KickUser from './KickUser.jsx';

const ChatSidebar = ({ users, partyInfo, username, kickUser }) => {
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
