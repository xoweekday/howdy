import React from 'react';
import Parties from './PartyCreation/Parties.jsx';
import ChatRoom from './PartyRoom/ChatRoom.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Parties Page</h1>
        <Parties />
        <h1>ChatRoom Page</h1>
        <ChatRoom />
      </div>
    );
  }
}

export default App;
