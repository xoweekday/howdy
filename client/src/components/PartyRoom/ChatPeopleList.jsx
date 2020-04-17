import React from 'react';

class ChatPeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row col-md-12">
          <h3>Party Go-ers</h3>
        </div>
        <div className="row col-md-12">
          <ul>
            <li>Luann</li>
            <li>Brock</li>
            <li>Sally</li>
            <li>Ivan</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ChatPeopleList;
