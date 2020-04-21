import React from 'react';
import ChatBoard from './ChatBoard.jsx';
import ChatPeopleList from './ChatPeopleList.jsx';

const ChatRoom = ({ partyInfo, username }) => {
  return(
    <div className="container">
      <div className="row">
        <div className="chatRoomContainer col-md-8"><ChatBoard partyInfo={partyInfo} username={username} /></div>
        <div className="chatPeopleListContainer col-md-4"><ChatPeopleList /></div>
      </div>
    </div>
  );
}

export default ChatRoom;
