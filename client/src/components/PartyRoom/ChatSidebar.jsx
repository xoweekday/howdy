import React from 'react';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';

const ChatSidebar = ({ users, partyInfo, username }) => {
  return (
    <div className="container-fluid sidebar-container">
        <ChatPeopleList users={users} username={username} />
        <ChatDetails partyInfo={partyInfo} />
      </div>
  );
}

export default ChatSidebar;
