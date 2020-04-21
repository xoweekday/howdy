import React from 'react';
import ChatBoard from './ChatBoard.jsx';

const ChatRoom = ({ partyInfo, username }) => {
  return (
    <ChatBoard partyInfo={partyInfo} username={username} />
  );
}

export default ChatRoom;
