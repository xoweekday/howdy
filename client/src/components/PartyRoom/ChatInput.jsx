import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';


const ChatInput = ({
  message, sendMessage, setMessage, users,
}) => {
  const [selectOptions, setOptions] = useState([]);
  const [selected, setSelect] = useState(users[0]);
  useEffect(() => {
    setOptions(users.map((user) => ({
      value: user,
      label: user.name,
    })));
  }, [users]);
  return (
    <div className="container-fluid">
      <div className="row d-flex-row">
        <div className="col-10 form-group">
          <Select
            options={selectOptions}
            onChange={(e) => {
              setSelect(e.value);
              console.log(selected);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Chatboard: enter message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary form-control send-button"
            onClick={(event) => sendMessage(event)}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  message: PropTypes.string,
  sendMessage: PropTypes.func,
  setMessage: PropTypes.func,
};

ChatInput.defaultProps = {
  message: '',
  sendMessage: () => {},
  setMessage: () => {},
};

export default ChatInput;
