import React from 'react';

class ChatBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
    };
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
      {messages.map((message) =>
        console.log(message)
      )}
      </div>
    );
  }
}

export default ChatBoard;
