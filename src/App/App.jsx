import React from 'react';
import axios from 'axios';
import Word from '../Word/Word.jsx';
import Keyboard from '../Keyboard/Keyboard.jsx';
import Lives from '../Lives/Lives.jsx';
import CurrentScore from '../CurrentScore/CurrentScore.jsx';
import Loading from '../Loading/Loading.jsx';
import LeaderBoard from '../LeaderBoard/LeaderBoard.jsx';
import defaultKeys from './utilities.js';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkUserGuess = this.checkUserGuess.bind(this);
    this.state = {
      word: [],
      notYetFound: -1,
      score: 0,
      reveal: [],
      attemptsLeft: 6,
      name: '',
      difficulty: '',
      leaderBoard: [],
      gameOver: false,
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

  componentDidUpdate(prevProps, prevState) {
    const { attemptsLeft, notYetFound, score, name, difficulty, gameOver } = this.state;
    if (attemptsLeft === 0 && prevState.gameOver === gameOver) {
      setTimeout(() => {this.getLeaderBoard(name, difficulty, score);}, 4000);
    }
    if (notYetFound === 0) {
      if (attemptsLeft === 6) {
        setTimeout(() => {this.addScore()}, 1500);
        setTimeout(() => {this.getWord()}, 1500);
      } else {
        setTimeout(() => {this.replenishLife()}, 100);
      }
    }
  }

  replenishLife() {
    const { attemptsLeft } = this.state;
    this.setState({attemptsLeft: attemptsLeft + 1});
  }

  addScore() {
    const { notYetFound, score } = this.state;
    this.setState({
      notYetFound: -1,
      score: score + 1
    });
  }

  getLeaderBoard(name, difficulty, score) {
    axios.post('/database/highscores', {
      params: {
        name: name,
        difficulty: difficulty,
        score: score
      }
    })
    .then(res => this.setState({
      gameOver: true,
      leaderBoard: res.data
    }))
    .catch(err => console.log(err));
  }

  getNameAndDifficulty() {
    const path = window.location.pathname.split('/');
    const name = path[2];
    const difficulty = path[3];
    return [name, difficulty];
  }

  getWord() {
    const difficulty = this.getNameAndDifficulty()[1];
    axios.get(`/api/choose_word/${difficulty}`, {difficulty: difficulty})
      .then(res => {
        let word = res.data.toUpperCase().split('');
        let reveal = word.map(letter => ({letter: letter, show: false, missed: false}));
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
    const { word, reveal, attemptsLeft, notYetFound } = this.state;
    let numAttempts = attemptsLeft;
    let lettersFound = word.filter(letter => letter === query);
    lettersFound.length === 0 ? numAttempts -= 1 : null;
    let check = reveal.map(entry => entry.letter === query ? ({letter: entry.letter, show: true, missed: false}) : entry);
    if (numAttempts === 0) {
      check = reveal.map(entry => entry.show === false ? ({letter: entry.letter, show: false, missed: true}) : entry);
    }
    this.setState({
      notYetFound: notYetFound - lettersFound.length,
      reveal: check,
      attemptsLeft: numAttempts
    });
  }

  render() {
    const { word, reveal, keys, attemptsLeft, notYetFound, score, name, difficulty, gameOver, leaderBoard } = this.state;
    if (gameOver) {
      return (
        <div>
          <LeaderBoard leaderBoard={leaderBoard} difficulty={difficulty}/>
        </div>
      )
    } else if (notYetFound === -1) {
      return (
        <div>
          <Loading score={score} />
        </div>
      )
    } else {
      return (
        <div >
          <Lives attemptsLeft={attemptsLeft} />
          <CurrentScore score={score} name={name} difficulty={difficulty}/>
          <Word reveal={reveal}/>
          <Keyboard keys={keys} checkUserGuess={this.checkUserGuess} attemptsLeft={attemptsLeft}/>
        </div>
      )
    }
  };
};

//export up at the top?
//proptypes
export default App;
