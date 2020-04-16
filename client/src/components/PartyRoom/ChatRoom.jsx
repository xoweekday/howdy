import React from 'react';
import ChatBoard from './ChatBoard.jsx';
import ChatPeopleList from './ChatPeopleList.jsx';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      messages: [],
    };
  }

  getMessages(){
    axios.get('/api/messages')
      .then((response) => this.setState({ messages: response.data }))
      .catch((error) => { throw error; });
  } 

  render() {
    const { people, messages } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="chatRoomContainer">
            <h2>ChatRoom:</h2>
            <ChatBoard messages={messages}/>
          </div>
          <div className="chatPeopleListContainer">
            <h2>People in ChatRoom</h2>
            <ChatPeopleList people={people} />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
