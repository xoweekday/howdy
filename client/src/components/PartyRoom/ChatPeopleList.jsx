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
      <h3>Game Rules:</h3>
      <ul className="rules">
        <li>Everyone receives the name of a famous person.</li>
        <li>Players circulate and ask yes or no questions until everyone has identified their famous person</li>
        <li>Start by asking broad questions.</li>
        <li>Get more specific with your questions.</li>
        <li>State your guess as to your identity</li>
      </ul>
      <button type="button" className="btn btn-primary" onClick={showCharacter}>Play Game</button>
    </div>
  );
}

export default ChatPeopleList;
