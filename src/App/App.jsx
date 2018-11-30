import React from 'react';
import axios from 'axios';
import Word from '../Word/Word.jsx';
import Keyboard from '../Keyboard/Keyboard.jsx';
import Lives from '../Lives/Lives.jsx';
import CurrentScore from '../CurrentScore/CurrentScore.jsx';
import Loading from '../Loading/Loading.jsx';
import defaultKeys from './utilities.js';
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
      name: '',
      difficulty: '',
      keys: defaultKeys,
    };
  };

  componentDidMount() {
    const nameAndDifficulty = this.getNameAndDifficulty();
    this.setState({
      name: nameAndDifficulty[0],
      difficulty: nameAndDifficulty[1]
    })
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

  getNameAndDifficulty() {
    const path = window.location.pathname.split('/');
    const name = path[2];
    const difficulty = path[3];
    return [name, difficulty];
  }

  getWord() {
    //err handling
    //condense into one .then?
    //this is very messy
    const difficulty = this.getNameAndDifficulty()[1];
    axios.get(`/api/choose_word/${difficulty}`, {difficulty: difficulty})
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
        let keys = Object.assign({}, defaultKeys);
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
    console.log(this.state.word)
    const { word, reveal, keys, attemptsLeft, notYetFound, score, name, difficulty } = this.state;
    if (notYetFound > 0) {
      return (
        <div >
          <Lives attemptsLeft={attemptsLeft} />
          <CurrentScore score={score} name={name} difficulty={difficulty}/>
          <Word reveal={reveal}/>
          <Keyboard key={score} keys={keys} checkUserGuess={this.checkUserGuess} attemptsLeft={attemptsLeft}/>
        </div>
      )
    } else {
      return (
        <div>
          <Loading score={score} />
        </div>
      )
    }
  };
};

//export up at the top?
//proptypes
export default App;
