import React from 'react';
import ChatBoard from './ChatBoard.jsx';
// import ChatPeopleList from './ChatPeopleList';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <h2>ChatRoom</h2>
          <ChatBoard />
        </div>
        <div>
          <h2>People in ChatRoom</h2>
          {/* <ChatPeopleList ></ChatPeopleList> */}
        </div>
      </div>
    );
  }
}

export default ChatRoom;
