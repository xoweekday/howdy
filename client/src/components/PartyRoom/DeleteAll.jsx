import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const DeleteAll = ({ users, messages, deleteMessage }) => {
  const [selectOptions, setOptions] = useState([]);
  const [selected, setSelect] = useState(users[0]);

  useEffect(() => {
    setOptions(users.map((user) => {
      return {
        value: user,
        label: user.name,
      }
    }));
  }, [users]);

  const deleteAll = (user) => {
    messages
      .filter((message) => message.user === user.name)
      .forEach((message) => deleteMessage(message));
  };
  
  return (
    <div>
      <Select options={selectOptions} onChange={(e) => setSelect(e.value)}/>
      <button type="button" onClick={() => deleteAll(selected)}>Delete All</button>
    </div>
  )
};

DeleteAll.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteMessage: PropTypes.func,
};

export default DeleteAll;