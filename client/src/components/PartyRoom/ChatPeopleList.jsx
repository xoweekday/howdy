import React from 'react';

const ChatPeopleList = ({ users }) => {
  return (
    <div>
      <h3>Current Party-ers:</h3>
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}

export default ChatPeopleList;
