import React from 'react';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';

const ChatSidebar = ({ users, partyInfo }) => {
  return (
    <div className="container-fluid">
      <div className="d-flex-col">
        <ChatPeopleList users={users} />
        <ChatDetails partyInfo={partyInfo} />
      </div>
    </div>
  );
}

export default ChatSidebar;
