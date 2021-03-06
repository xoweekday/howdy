import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Redirect } from 'react-router-dom';
import ChatHeader from './ChatHeader.jsx';
import ChatSidebar from './ChatSidebar.jsx';
import Messages from './Messages.jsx';

let socket;

const ChatRoom = ({
  partyInfo, username, userId, setTheme,
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [users, setUsers] = useState([]);
  const [room] = useState(partyInfo.name);
  const [kick, setKick] = useState(false);

  // DEVELOPMENT variable
  const endPoint = process.env.ENDPOINT;
  // PRODUCTION variable
  // const endPoint = 'http://ec2-18-221-135-146.us-east-2.compute.amazonaws.com:8081/#/';

  useEffect(() => {
    setTheme(partyInfo.theme);
    socket = io(endPoint);
    socket.emit('join', { room, username, userId }, () => { });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [room, username]);

  useEffect(() => {
    socket.on('receiveMessage', (incomingMessage) => {
      setMessages((messages) => [...messages, incomingMessage]);
    });

    socket.on('receiveImage', (image) => {
      setMessages((messages) => [...messages, image]);
    });

    socket.on('usersInRoom', (currentUsers) => {
      setUsers(currentUsers);
    });

    socket.on('receiveKick', () => {
      setKick(true);
      getKicked();
    });

    socket.on('receiveDelete', (message) => {
      setDeleted((deleted) => [...deleted, `${message.user}${message.text}${message.time}`]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', { message }, () => setMessage(''));
    }
  };

  const sendPrivateMessage = (id, event, name) => {
    event.preventDefault();
    if (message) {
      socket.emit('privateMessage', { message, id, name }, () => setMessage(''));
    }
  };
  const deleteMessage = (message) => {
    if (userId === partyInfo.host_id) {
      socket.emit('deleteMessage', message);
    }
  };

  const leftParty = () => {
    setTheme('original');
    socket.emit('leaveParty');
  };

  const getKicked = () => {
    setTheme('original');
    socket.emit('getKicked');
  };

  const renderRedirect = () => {
    if (username || partyInfo.name) {
      return null;
    }
    return <Redirect to="/" />;
  };

  const kickRedirect = () => {
    if (kick) {
      return <Redirect to="/parties" />;
    }
  };

  const sendUrl = (imageUrl) => {
    socket.emit('sendMessage', { message: imageUrl }, () => setMessage(''));
  };

  const kickUser = ({ id, userId, name }) => {
    if (confirm(`Kick ${name}?`)) {
      if (confirm(`Permanently ban ${name} from this party?`)) {
        axios.post('/api/ban', { user_id: userId, room_id: partyInfo.id });
      }
      socket.emit('kickUser', id);
    }
  };

  return (
    <div className="container-fluid chat-room">
      {renderRedirect()}
      {kickRedirect()}
      <div className="row">
        <div className="col">
          <ChatHeader partyInfo={partyInfo} />
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="col message-view">
          <Messages
            messages={messages}
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            leftParty={leftParty}
            sendUrl={sendUrl}
            deleteMessage={deleteMessage}
            deleted={deleted}
            users={users}
            kickUser={kickUser}
            partyInfo={partyInfo}
            username={username}
            userId={userId}
            sendPrivateMessage={sendPrivateMessage}
          />
        </div>
        <div className="col sidebar">
          <ChatSidebar
            username={username}
            users={users}
            partyInfo={partyInfo}
          />
        </div>
      </div>
    </div>
  );
};

ChatRoom.propTypes = {
  partyInfo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
    PropTypes.objectOf(PropTypes.string),
  ])),
  username: PropTypes.string,
};

ChatRoom.defaultProps = {
  partyInfo: {},
  username: '',
};
export default ChatRoom;
