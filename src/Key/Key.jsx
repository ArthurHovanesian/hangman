//can i just resuse word and letter components? or just do six boxes at top
import React from 'react';
import styles from './Key.css';

class Key extends React.Component {
  constructor(props) {
    super(props);
    const { attemptsLeft } = this.props;
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
    this.checkForGameOver = this.checkForGameOver.bind(this);
    this.borderColors = ['#424242', 'red','#ff4500','yellow','#39FF14','#00FFFF','#ff0dbf'];
    this.textColors = ['#424242', '#ffa8a8', '#ffbfa8', '#fbffaa', '#c3ffba', '#caf9f9', '#ffa0e4'];
    this.hoverStyles = {
      boxShadow: `0px 0px 8px 2px ${this.borderColors[attemptsLeft]}, 0px 0px 8px 2px ${this.borderColors[attemptsLeft]} inset`,
      color: `${this.textColors[attemptsLeft]}`,
      textShadow: `0px 0px 10px ${this.borderColors[attemptsLeft]}`,
      borderColor: 'white'
    }
    this.state = {
      isHovered: false,
      isClicked: false,
    }
  }

  handleHover() {
    const { isHovered } = this.state;
    this.setState({isHovered: !isHovered})
  }

  handleClick() {
    const { letter, checkUserGuess } = this.props;
    this.setState({
      isClicked: true
    });
    checkUserGuess(letter);
  }

  isCorrect() {
    const { inWord } = this.props;
    return inWord ? 'correct' : 'incorrect';
  }

  checkForGameOver(gameOver) {
    const { letter } = this.props;
    const { isHovered, isClicked } = this.state;
    const clickClass = isClicked ?  this.isCorrect() : '';
    const hoverStyles = gameOver ? {} : this.hoverStyles;
    const click = gameOver ? () => {} : this.handleClick;
    if (isClicked) {
      return (
        <div className={`${styles.key} ${styles[clickClass]}`} >
          {letter}
        </div>
      )
    } else if (isHovered) {
      return (
        <div className={`${styles.hovered} ${styles.key}`} style={hoverStyles} onMouseOver={this.handleHover} onMouseLeave={this.handleHover} onClick={() => click()}>
          {letter}
        </div>
      )
    } else {
      return (
        <div className={`${styles.notHovered} ${styles.key}`} onMouseOver={this.handleHover} onMouseLeave={this.handleHover} >
          {letter}
        </div>
      )
    }
  }

  render() {
    const { attemptsLeft } = this.props;
    if (attemptsLeft === 0) {
      return this.checkForGameOver(true)
    } else {
      return this.checkForGameOver(false)
    }

  }
}

export default Key;
