import React, { useState } from 'react';

const ChatPeopleList = ({ users, username }) => {

  const [flag, setFlag] = useState(false);

  const showCharacter = (e) => {
    e.preventDefault();
    if (!flag) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row"></div>
      <h2 className="partiers">Guests:</h2>
        <div className="container-fluid guest-list">
      {users.map(user => <div key={user.id}>{user.name} {

        flag && username !== user.name ? user.character : null

      } </div>)}
      </div>
      <a href="https://icebreakerideas.com/who-am-i-game/" target="_blank"><h3>Game Rules:</h3></a>
      <p> Ask questions to guess your character!</p>

      <button type="button" onClick={showCharacter}>Play Game</button>

    </div>

  );
}

export default ChatPeopleList;
