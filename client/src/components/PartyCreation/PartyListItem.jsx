import React from 'react';

class PartyListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
  }

  //Render individual party details. 
  render() {
    return (
      <div>

        <div className='partyContainer' class='container'>
          <div class="row">
            <div className='partyName' class='col'>Cool Party Name</div>
            <div className='partyDistance' class='col'>6miles</div>
            <div className='partySize' class='col'>3party-goers</div>
            <div className='partyHost' class='col'>John</div>
            <div className='partyStartTime' class='col'>8pm</div>
            <div className='partyEndTime' class='col'>10pm</div>
            <div className='partyLink' class='col'>link to party</div>
          </div>
        </div>


      </div>
    );
  }
}

export default PartyListItem;