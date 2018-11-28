import React from 'react';
import axios from 'axios';

class App extends React.Component {
  //is props necessary?
  constructor() {
    super();
    //spinner for loading word
    this.state = {
      word: '',
    };
  };

  componentWillMount() {
    this.getWord();
  }

  getWord() {
    //err handling
    axios.get('/api/choose_word')
      .then(res => this.setState({word: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.word)
    return (
      <h1>{this.state.word}</h1>
    )
  };
};

//export up at the top?
export default App;
