import React from 'react';
import axios from 'axios';

class CreateParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: '',
      end: '',
      date: '',
      radius: '',
      details: 'no details yet',
      location: 'New Orleans',
      host_id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getNewPartyEntry } = this.props
    console.log('clicked the submit button: ', this.state);
    axios.post('/api/homepage', this.state)
    .then((response) => {
      console.log(response);
      getNewPartyEntry();
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col center">
        <form onSubmit={this.handleSubmit}>
          <h3>Party Creation Tools</h3>
      <div class="form-group">
          <label>
            Party
            <input
              class="form-control"
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Name Your Party"
              onChange={this.handleChange}
              />
          </label>
            </div>
            <div class="form-group">
          <label>
            Start Time
            <input
              class="form-control"
              name="start"
              type="time"
              value={this.state.start}
              onChange={this.handleChange}
              />
          </label>
          </div>
          <div class="form-group">
          <label>
            End Time
            <input
              class="form-control"
              type="time"
              name="end"
              onChange={this.handleChange}
              />
          </label>
          </div>
          <div class="form-group">
          <label>
            Date
            <input
              class="form-control"
              type="date"
              name="date"
              onChange={this.handleChange}
              />
          </label>
          </div>
          <div class="form-group">
          <label>
            Radius
            <input
              class="form-control"
              type="number"
              name="radius"
              placeholder="Miles"
              onChange={this.handleChange}
              />
          </label>
          </div>
          <div class="form-group">
          <label>
            <input
              class="form-control"
              type="submit"
              value="submit"
              class="btn btn-primary"
              />
          </label>
          </div>
        </form>
      </div>
              </div>
            </div>
    );
  }
}

export default CreateParty;
