import React from 'react';
import ChatBoard from './ChatBoard.jsx';
import ChatPeopleList from './ChatPeopleList.jsx';
import { Link } from 'react-router-dom';
import io from "socket.io-client";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      message: '',
      messages: [],
    };

    this.socket = io('localhost:8080');

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: '' });
    }

    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
  });

  const addMessage = data => {
      console.log(data);
      this.setState({messages: [...this.state.messages, data]});
      console.log(this.state.messages);
  };

  }
  render() {
    const { people, messages } = this.state;
    const { partyInfo } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="chatRoomContainer col-md-8">
            {/* <ChatBoard message={message} messages={messages} partyInfo={partyInfo} /> */}
            <div className="container">
              <div className="row">
                <h3>Welcome to the {partyInfo.name}</h3>
              </div>
              <div>
                <h5>Party Details:</h5>
                <p>{partyInfo.details}</p>
              </div>
              <div className="row">
                <div className="messages-box col-md-12">
                  {this.state.messages.map(message => {
                    return (
                      <div>{message.message}</div>
                    )
                  })}
                </div>
              </div>
              <div className="row">
                <div className="send-a-message-box col-md-12">
                  <div className="form-group">
                    <label className="send-a-message"></label>
                    <input type="text"
                      className="form-control"
                      placeholder="enter message"
                      value={this.state.message}
                      onChange={ev => this.setState({ message: ev.target.value })}></input>
                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chatPeopleListContainer col-md-4">
            <ChatPeopleList people={people} />
          </div>
          <Link to={{ pathname: '/parties' }}>
            <button
              type="button"
              className="btn btn-primary"
            >Leave Party</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
