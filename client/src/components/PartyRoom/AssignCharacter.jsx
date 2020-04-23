import React from 'react';

const AssignCharacter = ({ users }) => {
  
  function handleClick(e) {
    e.preventDefault();
    users.forEach(user=> console.log(user.character));
  }

  return (
    <div>
      <button type='button' onClick={handleClick}>
        <h3>Assign Character</h3>
      </button>
    </div>
  );
}

export default AssignCharacter;