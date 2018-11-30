//can i just resuse word and letter components? or just do six boxes at top
import React from 'react';
import styles from './Key.css';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkUserGuess = this.checkUserGuess.bind(this);
    this.colors = ['red','#ff4500','yellow','#39FF14','#00FFFF','#ff0dbf']
    this.state = {
      isHovered: false,
      isClicked: false,
    }
  }
  //don't use this.stae inside setstate
  handleHover(){
    this.setState({isHovered: !this.state.isHovered})
  }

  handleClick() {
    const { letter, checkUserGuess } = this.props;
    this.setState({
      isClicked: true
    });
    checkUserGuess(letter);
  }

  checkUserGuess(){
    const { inWord } = this.props;
    return inWord ? 'correct' : 'incorrect';
  }

  render() {
    const { letter, checkUserGuess, attemptsLeft } = this.props;
    const { isHovered, isClicked } = this.state;
    const clickClass = isClicked ?  this.checkUserGuess() : '';
    if (isClicked) {
      return (
        <div className={`${styles.key} ${styles[clickClass]}`} >
          {letter}
        </div>
      )
    } else if (isHovered) {
      return (
        <div className={`${styles.hovered} ${styles.key} ${styles[clickClass]}`} style={{backgroundColor: `${this.colors[attemptsLeft - 1]}`}}onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={() => this.handleClick()}>
          {letter}
        </div>
      )
    } else {
      return (
        <div className={`${styles.notHovered} ${styles.key} ${styles[clickClass]}`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={() => this.handleClick()}>
          {letter}
        </div>
      )
    }
  }
}

export default Key;
