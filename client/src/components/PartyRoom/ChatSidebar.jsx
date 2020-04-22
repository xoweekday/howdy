import React from 'react';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';
import AssignCharacter from './AssignCharacter.jsx';
import GameRules from './GameRules.jsx';

const ChatSidebar = ({ users, partyInfo }) => {
  return (
    <div className="container-fluid">
      <div className="d-flex-col">
        <ChatPeopleList users={users} />
        <ChatDetails partyInfo={partyInfo} />
        <GameRules />
        <AssignCharacter users={users} />
      </div>
    </div>
  );
}

export default ChatSidebar;
