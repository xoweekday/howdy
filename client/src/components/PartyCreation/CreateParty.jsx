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
      range: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('clicked the submit button: ', this.state);
    axios.post('/api/homepage', this.state)
      .then((response) => { console.log(response); })
      .catch((error) => { console.log(error); });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Party Creation Tools</h3>
          <label>
            Party
            <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Name Your Party"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Start Time
            <input
              name="start"
              type="time"
              value={this.state.start}
              onChange={this.handleChange}
            />
          </label>
          <label>
            End Time
            <input
              type="time"
              name="end"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Date
            <input
              type="date"
              name="date"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Range
            <input
              type="number"
              name="range"
              placeholder="Miles"
              onChange={this.handleChange}
            />
          </label>
          <label> 
            Make A Party
            <input
              type="submit"
              value="submit"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default CreateParty;
