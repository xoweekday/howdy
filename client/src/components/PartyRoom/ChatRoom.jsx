import React from 'react';
import ChatBoard from './ChatBoard.jsx';

const ChatRoom = ({ partyInfo, username }) => {
  return(
    <div className="container">
      <div className="row">
        <div className="chatRoomContainer col-md-8"><ChatBoard partyInfo={partyInfo} username={username} /></div>
      </div>
    </div>
  );
}

export default ChatRoom;
