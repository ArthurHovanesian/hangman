import React from 'react';
import axios from 'axios';
import Word from '../Word/Word.jsx';
import Guess from '../Guess/Guess.jsx';

class App extends React.Component {
  //is props necessary?
  constructor() {
    super();
    //spinner for loading word
    this.state = {
      word: [],
    };
  };

  componentDidMount() {
    this.getWord();
  }

  getWord() {
    //err handling
    axios.get('/api/choose_word')
      .then(res => this.setState({word: res.data.split('')}))
      .catch(err => console.log(err));
  }

  render() {
    const { word } = this.state;
    return (
      <div>
        <Guess />
        <Word word={word}/>
      </div>
    )
  };
};

//export up at the top?
//proptypes
export default App;
