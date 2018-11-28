import React from 'react';
import axios from 'axios';
import Word from '../Word/Word.jsx';
import Keyboard from '../Keyboard/Keyboard.jsx';
import styles from './App.css';

class App extends React.Component {
  //is props necessary?
  constructor() {
    super();
    //spinner for loading word
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      word: [],
      keys: {
        'Q': false,
        'W': false,
        'E': false,
        'R': false,
        'T': false,
        'Y': false,
        'U': false,
        'I': false,
        'O': false,
        'P': false,
        'A': false,
        'S': false,
        'D': false,
        'F': false,
        'G': false,
        'H': false,
        'J': false,
        'K': false,
        'L': false,
        'Z': false,
        'X': false,
        'C': false,
        'V': false,
        'B': false,
        'N': false,
        'M': false
      },
    };
  };

  componentDidMount() {
    this.getWord();
  }

  getWord() {
    //err handling
    axios.get('/api/choose_word')
      .then(res => this.setState({word: res.data.split('')}))
      .catch(err => console.log(err))
      .then(() => {
        const word = this.state.word;
        let keys = Object.assign({}, this.state.keys)
        word.forEach(letter => {
          letter = letter.toUpperCase();
          keys[letter] = true;
        })
        this.setState({keys: keys})
      })
  }

  handleClick(query) {
    this.state.word.forEach(letter => {
      if (letter.toUpperCase() === query) {
        const correctGuess = this.state.correctGuess.slice();
        correctGuess.push(query);
        this.setState({correctGuess: correctGuess});
      } else {
        const incorrectGuess = this.state.incorrectGuess.slice();
        incorrectGuess.push(query);
        this.setState({correctGuess: incorrectGuess});
      }
    })
  }

  render() {
    const { word, keys } = this.state;
    return (
      <div className={styles.app}>
        <Keyboard keys={keys} handleClick={this.handleClick} />
        <Word word={word}/>
      </div>
    )
  };
};

//export up at the top?
//proptypes
export default App;
