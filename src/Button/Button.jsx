import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    const { level } = this.props;
    this.handleHover = this.handleHover.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.text = ['EASY', 'MEDIUM', 'HARD', 'TRY AGAIN'];
    this.textColors = ['#ff8ee1', '#d393ff', '#9a93ff', '#9a93ff'];
    this.borderColors = ['#ff00bb', '#9800ff', '#1000ff', '#1000ff'];
    this.width = ['19%', '19%', '19%', '50%'];
    this.hoverStyles = {
      hovered: {
        boxShadow: `0px 0px 8px 2px ${this.borderColors[level]}, 0px 0px 8px 2px ${this.borderColors[level]} inset`,
        color: `${this.textColors[level]}`,
        textShadow: `0px 0px 10px ${this.borderColors[level]}`,
        width: `${this.width[level]}`
      },
      notHovered: {
        width: `${this.width[level]}`
      }
    }
    this.state = {
      isHovered: false,
    }
  }

  handleHover() {
    const { isHovered } = this.state;
    this.setState({isHovered: !isHovered});
  }

  renderButton(hoverState) {
    const { level, handleNoName } = this.props;
    const click = handleNoName || (() => null);
    return (
      <button className={`${styles[hoverState]} ${styles.difficulty}`} style={this.hoverStyles[hoverState]} onMouseOver = {this.handleHover} onMouseLeave={this.handleHover} onClick={() => click()}>{this.text[level]}</button>
    )
  }

  render() {
    const { isHovered } = this.state;
    return (
      <span>
        {isHovered ? (
          <span>
            {this.renderButton('hovered')}
          </span>
        ) : (
          <span>
            {this.renderButton('notHovered')}
          </span>
        )}
      </span>
    )
  }
}

Button.propTypes = {
  level: PropTypes.number.isRequired,
  toggleCarousel: PropTypes.func.isRequired,
};

export default Button;
