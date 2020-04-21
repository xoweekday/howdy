import React from 'react';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';

const ChatSidebar = ({ users, partyInfo }) => {
  return (
    <div className="container">
      <ChatPeopleList users={users} />
      <ChatDetails partyInfo={partyInfo} />
    </div>
  );
}

export default ChatSidebar;
