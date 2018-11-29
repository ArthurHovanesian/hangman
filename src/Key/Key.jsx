//can i just resuse word and letter components? or just do six boxes at top
import React from 'react';
import styles from './Key.css';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkUserGuess = this.checkUserGuess.bind(this);
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
    const { letter, checkUserGuess } = this.props;
    const { isHovered, isClicked } = this.state;
    const hoverClass = isHovered ? 'hovered' : 'notHovered';
    const clickClass = isClicked ?  this.checkUserGuess() : '';
    if (isClicked) {
      return (
        <div className={`${styles.key} ${styles[clickClass]}`} >
          {letter}
        </div>
      )
    } else {
      return (
        <div className={`${styles[hoverClass]} ${styles.key} ${styles[clickClass]}`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={() => this.handleClick()}>
          {letter}
        </div>
      )
    }
  }
}

export default Key;
