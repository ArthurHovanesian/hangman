import React from 'react';
import axios from 'axios';
import Word from '../Word/Word.jsx';
import Keyboard from '../Keyboard/Keyboard.jsx';
import Lives from '../Lives/Lives.jsx';
import styles from './App.css';

class App extends React.Component {
  //is props necessary?
  constructor() {
    super();
    //spinner for loading word
    this.checkUserGuess = this.checkUserGuess.bind(this);
    this.state = {
      word: [],
      reveal: [],
      attemptsLeft: 6,
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

  componentDidUpdate() {
    const { attemptsLeft } = this.state;
    if (attemptsLeft === 0) {
      alert('you lose')
    }
  }

  getWord() {
    //err handling
    //condense into one .then?
    //this is very messy
    axios.get('/api/choose_word')
      .then(res => {
        let word = res.data.toUpperCase().split('');
        let reveal = word.map(letter => ({letter: letter, show: false}));
        this.setState({
          word: word,
          reveal: reveal
        });
      })
      .catch(err => console.log(err))
      .then(() => {
        const { word } = this.state;
        let keys = Object.assign({}, this.state.keys);
        word.forEach(letter => {
          letter = letter;
          keys[letter] = true;
        })
        this.setState({keys: keys})
      })
  }

  checkUserGuess(query) {
    //there's a lot going on here
    const { word, reveal, attemptsLeft } = this.state;
    let numAttempts = attemptsLeft;
    let isFound = word.filter(letter => letter === query);
    isFound.length === 0 ? numAttempts -= 1 : null
    let check = reveal.map(entry => entry.letter === query ? ({letter: entry.letter, show: true}) : entry)
    this.setState({
      reveal: check,
      attemptsLeft: numAttempts
    });
  }

  render() {
    const { reveal, keys, attemptsLeft } = this.state;
    return (
      <div >
        <Lives attemptsLeft={attemptsLeft} />
        <Word reveal={reveal}/>
        <Keyboard keys={keys} checkUserGuess={this.checkUserGuess} />
      </div>
    )
  };
};

//export up at the top?
//proptypes
export default App;
