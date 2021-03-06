import React from 'react';
import PropTypes from 'prop-types';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';

const ChatSidebar = ({ users, partyInfo, username, }) => {
  return (
    <div className="container-fluid sidebar-container">
      <div className="row d-flex-col">
        <ChatDetails partyInfo={partyInfo} />
        <ChatPeopleList users={users} username={username} />
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
