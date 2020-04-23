import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ChatHeader from './ChatHeader.jsx';
import ChatSidebar from './ChatSidebar.jsx';
import Messages from './Messages.jsx'
import { Redirect } from 'react-router-dom'

let socket;

const ChatRoom = ({ partyInfo, username }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState(partyInfo.name);

  // DEVELOPMENT variable
  const endPoint = 'localhost:8080';
  // PRODUCTION variable
  // const endPoint = 'http://ec2-18-221-135-146.us-east-2.compute.amazonaws.com:8081/#/';

  useEffect(() => {
    socket = io(endPoint);
    socket.emit('join', { room, username }, () => { });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [])

  useEffect(() => {
    socket.on('receiveMessage', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on('usersInRoom', users => {
      setUsers(users);
    })
  }, []);

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', { message }, () => setMessage(''));
    }
  };

  const leftParty = () => {
    socket.emit('leaveParty', room);
  }

  const renderRedirect = () => {
    if (!username || !partyInfo.name) {
      console.log("Cannot enter chatroom without signing in, dummy")
      return <Redirect to='/' />
    }
  }

  return (
    <div className="container-fluid chat-room">
      {/* {renderRedirect()} */}
      <div className='row'>
        <div className="col">
      <ChatHeader partyInfo={partyInfo} />
      </div>
      </div>
      <div className="d-flex flex-row">
        <div className="col message-view">
          <Messages messages={messages} message={message} setMessage={setMessage} sendMessage={sendMessage} leftParty={leftParty} />
        </div>
        <div className="col sidebar">
          <ChatSidebar username={username} users={users} partyInfo={partyInfo} />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
