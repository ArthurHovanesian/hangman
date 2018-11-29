import React from 'react';
import Key from '../Key/Key.jsx';
import styles from './Keyboard.css';

class Keyboard extends React.Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.state = {
    }
  }

  renderRow(start, end) {
    const { keys, checkUserGuess } = this.props;
    return Object.keys(keys)
                 .filter((key, index) => index >= start && index <= end)
                 .map(key => <Key letter={key} inWord={keys[key]} checkUserGuess={checkUserGuess}/>)
  }

  render() {
    return (
      <div>
        <div className={styles.row}>
          {this.renderRow(0, 9)}
        </div>
        <div className={styles.row}>
          {this.renderRow(10, 18)}
        </div>
        <div className={styles.row}>
          {this.renderRow(19, 26)}
        </div>
      </div>
    )
  }
}

export default Keyboard;
