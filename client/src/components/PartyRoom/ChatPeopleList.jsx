import React from 'react';

const ChatPeopleList = ({users}) => {
    return (
      <div className="container">
        <div className="row col-md-12">
          <h3>Party'rs</h3>
        </div>
        <div className="row col-md-12">
          <ul>
            {users.map(user=> <div key={user.id}>{user.name}</div>)}
          </ul>
        </div>
      </div>
    );
  }

export default ChatPeopleList;
