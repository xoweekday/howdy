import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const KickUser = ({ users, kickUser }) => {
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

  return (
    <div className="container-fluid">
      <Select options={selectOptions} onChange={(e) => setSelect(e.value)}/>
      <button type="button" onClick={() => kickUser(selected)}>Kick User</button>
    </div>
  )
};

KickUser.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default KickUser;
