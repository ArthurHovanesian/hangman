import React from 'react';
import Key from '../Key/Key.jsx';
import styles from './Keyboard.css';

const Keyboard = ({ keys, checkUserGuess, attemptsLeft }) => {
  const renderRow = (start, end) => {
    return Object.keys(keys)
                 .filter((key, index) => index >= start && index <= end)
                 .map((key, index) => <Key letter={key} key={index} inWord={keys[key]} checkUserGuess={checkUserGuess} attemptsLeft={attemptsLeft}/>)
  }

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          {renderRow(0, 9)}
        </div>
        <div className={styles.row}>
          {renderRow(10, 18)}
        </div>
        <div className={styles.row}>
          {renderRow(19, 26)}
        </div>
      </div>
    </div>
  )
}

export default Keyboard;
