import React from 'react';
import styles from './Button.css';

class Button extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
    this.text = ['EASY', 'MEDIUM', 'HARD', 'TRY AGAIN'];
    this.textColors = ['#ff8ee1', '#d393ff', '#9a93ff', '#9a93ff'];
    this.borderColors = ['#ff00bb', '#9800ff', '#1000ff', '#1000ff'];
    this.width = ['19%', '19%', '19%', '50%'];
    this.state = {
      isHovered: false,
    }
  }

  handleHover() {
    const { isHovered } = this.state;
    this.setState({isHovered: !isHovered})
  }

  render() {
    const { level, handleNoName } = this.props;
    const { isHovered } = this.state;
    const click = handleNoName || (() => null);
    return (
      <span>
        {isHovered ? (
          <button className={`${styles.hovered} ${styles.difficulty}`} style={{boxShadow: `0px 0px 8px 2px ${this.borderColors[level]}, 0px 0px 8px 2px ${this.borderColors[level]} inset`, color: `${this.textColors[level]}`, textShadow: `0px 0px 10px ${this.borderColors[level]}`, width: `${this.width[level]}`}} onMouseOver={this.handleHover} onMouseLeave={this.handleHover} onClick={() => click()}>{this.text[level]}</button>
        ) : (
          <button className={`${styles.notHovered} ${styles.difficulty}`} style={{width: `${this.width[level]}`}} onMouseOver={this.handleHover} onMouseLeave={this.handleHover} onClick={() => click()}>{this.text[level]}</button>
        )}
      </span>
    )
  }
}

export default Button;
