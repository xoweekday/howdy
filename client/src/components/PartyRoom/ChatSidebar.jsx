import React from 'react';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';

const ChatSidebar = ({ users, partyInfo, username }) => {
  return (
    <div className="container-fluid sidebar-container">
      <div className="row d-flex-col">
        <ChatDetails partyInfo={partyInfo} />
        <ChatPeopleList users={users} username={username} />
      </div>
    </div>
  );
}

export default ChatSidebar;
