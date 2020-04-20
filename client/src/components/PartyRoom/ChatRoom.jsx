import React from 'react';
import ChatBoard from './ChatBoard.jsx';
import ChatPeopleList from './ChatPeopleList.jsx';
import { Link } from 'react-router-dom';

const ChatRoom = ({ partyInfo, username }) => {
  return(
    <div className="container">
      <div className="row">
        <div className="chatRoomContainer col-md-8"><ChatBoard partyInfo={partyInfo} username={username} /></div>
        <div className="chatPeopleListContainer col-md-4"><ChatPeopleList /></div>
        <Link to={{ pathname: '/parties' }}>
          <button type="button" className="btn btn-primary">Leave Party</button>
        </Link>
      </div>
    </div>
  );
}

export default ChatRoom;
