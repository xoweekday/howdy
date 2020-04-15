import React from 'react';

class CreateParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>Party Creation Tools</h3>
          <div> Party
            <input type="text" partyName="name" placeholder="Name Your Party" />
          </div>
          <div> Start Time
            <input type="time" name="startTime" id="startTime"/>
          </div>
          <div> End Time
            <input type="time" name="endTime" id="endTime"/>
          </div>
          <div> Date
            <input type="date" name="date" id="date"/>
          </div>
          <div> Range
            <input type="number" name="range" id="range" placeholder='Miles'/>
          </div>
          <div> Make A Party
            <input type="submit" value="submit"/>
          </div>
      </div>
    );
  }
}

export default CreateParty;