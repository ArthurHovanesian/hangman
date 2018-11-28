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

  handleHover(){
    this.setState({isHovered: !this.state.isHovered})
  }

  render() {
    const { letter, index } = this.props;
    const keyClass = this.state.isHovered ? 'hovered' : 'notHovered';
    return (
      <div className={`${styles[keyClass]} ${styles.key}`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        {letter}
      </div>
    )
  }
}

export default Key;
