import React, { useState } from 'react';

const ChatPeopleList = ({ users, username }) => {

  const [ flag, setFlag ] = useState(false);

  const showCharacter = (e) => {
    e.preventDefault();
    if(!flag){
      setFlag(true);
    } else {
      setFlag(false);
    }
  }

  return (
    <div>
      <h3>Current Party-ers:</h3>
      
      {users.map(user => <div key={user.id}>{user.name} {
        
        flag && username !== user.name ? user.character : null 
        
      } </div>)}

      <button type="button" onClick={showCharacter}>Play Game</button>

    </div>

  );
}

export default ChatPeopleList;
