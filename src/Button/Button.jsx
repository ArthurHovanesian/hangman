import React from 'react';
import styles from './Button.css';

class Button extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
    this.text = ['EASY', 'MEDIUM', 'HARD'];
    this.textColors = ['#c3ffba', '#fbffaa', '#ffa8a8'];
    this.borderColors = ['#39FF14', 'yellow', 'red'];
    this.state = {
      isHovered: false,
      isClicked: false,
    }
  }

  handleHover() {
    const { isHovered } = this.state;
    this.setState({isHovered: !isHovered})
  }

  render() {
    const { level } = this.props;
    const { isHovered } = this.state;
    return (
      <span>
        {isHovered ? (
          <button className={`${styles.hovered} ${styles.difficulty}`} style={{boxShadow: `0px 0px 8px 2px ${this.borderColors[level]}, 0px 0px 8px 2px ${this.borderColors[level]} inset`, color: `${this.textColors[level]}`, textShadow: `0px 0px 10px ${this.borderColors[level]}`}} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >{this.text[level]}</button>
        ) : (
          <button className={`${styles.notHovered} ${styles.difficulty}`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>{this.text[level]}</button>
        )}
      </span>
    )
  }
}

export default Button;
