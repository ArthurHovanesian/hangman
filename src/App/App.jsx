import React from 'react';
import axios from 'axios';
import Word from '../Word/Word.jsx';
import Keyboard from '../Keyboard/Keyboard.jsx';
import Lives from '../Lives/Lives.jsx';
import CurrentScore from '../CurrentScore/CurrentScore.jsx';
import styles from './App.css';

class App extends React.Component {
  //is props necessary?
  constructor() {
    super();
    //spinner for loading word
    this.checkUserGuess = this.checkUserGuess.bind(this);
    this.state = {
      word: [],
      notYetFound: -1,
      score: 0,
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

  componentDidUpdate(prevProps) {
    const { attemptsLeft, notYetFound, score } = this.state;
    if (attemptsLeft === 0) {
      alert('you lose')
    }
    if (notYetFound === 0) {
      this.getWord();
      this.setState({
        score: score + 1,
        notYetFound: -1,
        attemptsLeft: 6,
      })
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
          notYetFound: word.length,
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
    const { word, reveal, attemptsLeft, notYetFound } = this.state;
    let numAttempts = attemptsLeft;
    let lettersFound = word.filter(letter => letter === query);
    lettersFound.length === 0 ? numAttempts -= 1 : null;
    let check = reveal.map(entry => entry.letter === query ? ({letter: entry.letter, show: true}) : entry)
    this.setState({
      notYetFound: notYetFound - lettersFound.length,
      reveal: check,
      attemptsLeft: numAttempts
    });
  }

  render() {
    const { word, reveal, keys, attemptsLeft, notYetFound, score } = this.state;
    console.log(this.state.word, this.state.notYetFound)
    if (notYetFound > 0) {
      return (
        <div >
          <Lives attemptsLeft={attemptsLeft} />
          <CurrentScore score={score} />
          <Word reveal={reveal}/>
          <Keyboard key={score} keys={keys} checkUserGuess={this.checkUserGuess} />
        </div>
      )
    } else {
      return (
        <h1>Thinking...</h1>
      )
    }
  };
};

//export up at the top?
//proptypes
export default App;
