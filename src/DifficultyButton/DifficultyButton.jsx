import React from 'react';
import styles from './DifficultyButton.css';

class DifficultyButton extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
    this.text = ['EASY', 'MEDIUM', 'HARD', 'START'];
    this.textColors = ['#c3ffba', '#fbffaa', '#ffa8a8', '#ffa0e4'];
    this.borderColors = ['#39FF14', 'yellow', 'red', '#ff0dbf'];
    this.state = {
      isHovered: false,
    }
  }

  handleHover() {
    this.setState({isHovered: !this.state.isHovered})
  }
  
  render() {
    const { level } = this.props;
    const { isHovered } = this.state;
    const buttonType = level < 3 ? 'difficulty' : 'start';
    return (
      <span>
        {isHovered ? (
          <button className={`${styles.hovered} ${styles[buttonType]}`} style={{boxShadow: `0px 0px 8px 2px ${this.borderColors[level]}, 0px 0px 8px 2px ${this.borderColors[level]} inset`, color: `${this.textColors[level]}`, textShadow: `0px 0px 10px ${this.borderColors[level]}`}} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>{this.text[level]}</button>
        ) : (
          <button className={`${styles.notHovered} ${styles[buttonType]}`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>{this.text[level]}</button>
        )}
      </span>
    )
  }
}

export default DifficultyButton;
