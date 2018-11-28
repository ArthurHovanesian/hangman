//can i just resuse word and letter components? or just do six boxes at top
import React from 'react';
import styles from './Key.css';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      isHovered: false,
    }
  }
  //don't use this.stae inside setstate
  handleHover(){
    this.setState({isHovered: !this.state.isHovered})
  }

  render() {
    const { letter, handleClick } = this.props;
    const keyClass = this.state.isHovered ? 'hovered' : 'notHovered';
    return (
      <div className={`${styles[keyClass]} ${styles.key}`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={() => handleClick(letter)}>
        {letter}
      </div>
    )
  }
}

export default Key;
