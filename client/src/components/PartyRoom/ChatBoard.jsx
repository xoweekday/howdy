import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ChatHeader from './ChatHeader.jsx';

let socket;

const ChatBoard = ({ partyInfo }) => {
  const [ message, setMessage ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const [ room, setRoom ] = useState(partyInfo.name);

  // DEVELOPMENT variable
  const endPoint = 'localhost:8080';
  // PRODUCTION variable
  // const endPoint = 'http://ec2-18-221-135-146.us-east-2.compute.amazonaws.com:8081/#/';

  const sendMessage = (event) => {
    event.preventDefault()

    if(message){
      socket.emit('sendMessage', message, () => setMessage('')); }
  };

  useEffect(() => {
    socket = io(endPoint);

    // emit an event to receive a join message
    socket.emit('join', { room }, () => {});

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [endPoint, location.search])

  useEffect(() => {
    socket.on('receiveMessage', message => {
      setMessages(messages => [ ...messages, message ]);
    });
  }, []);

  return(
    <div className="container">
      <ChatHeader partyInfo={partyInfo} />
      <div className="row">
        <div className="messages-box col-md-12">
          {messages.map((message, i) => <div key={i}>{message}</div>)}
        </div>
      </div>
      <div className="row">
        <div className="send-a-message-box col-md-12">
          <div className="form-group">
            <label className="send-a-message"></label>
            <input
              type="text"
              className="form-control"
              placeholder="ChatBoard: enter message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            ></input>
            <button
              type="button"
              className="btn btn-primary form-control"
              onClick={(event) => sendMessage(event)}
            >Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBoard;
