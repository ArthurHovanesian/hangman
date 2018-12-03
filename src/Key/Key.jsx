import React from 'react';
import PropTypes from 'prop-types';
import styles from './Key.css';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
    this.renderGameOver = this.renderGameOver.bind(this);
    this.renderHoverState = this.renderHoverState.bind(this);
    this.borderColors = ['#424242', 'red','#ff4500','yellow','#39FF14','#00FFFF','#ff0dbf'];
    this.textColors = ['#424242', '#ffa8a8', '#ffbfa8', '#fbffaa', '#c3ffba', '#caf9f9', '#ffa0e4'];
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

  renderHoverState(gameOver, hover) {
    const { letter, attemptsLeft } = this.props;
    const hoverState = hover ? 'hovered' : 'notHovered';
    const click = gameOver ? () => {} : this.handleClick;
    const hoverStyles = {
      boxShadow: `0px 0px 8px 2px ${this.borderColors[attemptsLeft]}, 0px 0px 8px 2px ${this.borderColors[attemptsLeft]} inset`,
      color: `${this.textColors[attemptsLeft]}`,
      textShadow: `0px 0px 10px ${this.borderColors[attemptsLeft]}`,
      borderColor: 'white'
    };
    const hovered = gameOver || !hover ? {} : hoverStyles;
    return (
      <div className={`${styles[hoverState]} ${styles.key}`}
           style={hovered}
           onMouseOver={this.handleHover}
           onMouseLeave={this.handleHover}
           onClick={() => click()}
      >
        {letter}
      </div>
    )
  }

  renderGameOver(gameOver) {
    const { letter } = this.props;
    const { isHovered, isClicked } = this.state;
    const clickClass = isClicked ?  this.isCorrect() : '';
    if (isClicked) {
      return (
        <div className={`${styles.key} ${styles[clickClass]}`} >
          {letter}
        </div>
      )
    } else if (isHovered) {
      return this.renderHoverState(gameOver, true);
    } else {
      return this.renderHoverState(gameOver, false);
    }
  }

  render() {
    const { attemptsLeft } = this.props;
    if (attemptsLeft === 0) {
      return this.renderGameOver(true)
    } else {
      return this.renderGameOver(false)
    }

  }
}

Key.propTypes = {
  attemptsLeft: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
  checkUserGuess: PropTypes.func.isRequired,
};

export default Key;
