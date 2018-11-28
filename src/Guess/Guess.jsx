import React from 'react';

class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    const character = event.target.value.toLowerCase();
    console.log(event.target.value)
    if (character.charCodeAt(0) === 127) {
      console.log('delete')
    }
    if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
      this.setState({value: character});
    };
  }

  handleSubmit(event) {
    const { value } = this.state;
    if (value !== '') {
      console.log('A name was submitted: ' + this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type='text' value={this.state.value} maxLength='1' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Guess;
