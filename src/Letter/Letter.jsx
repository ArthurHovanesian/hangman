import React from 'react';
import styles from './Letter.css';

const Letter = ({ entry }) => {
  if (entry.missed) {
    return (
      <div className={`${styles.letter} ${styles.missed}`}>
        {entry.letter}
      </div>
    )
  } else {
    return (
      <div className={styles.letter}>
        {entry.show ? entry.letter : ''}
      </div>
    )
  }
}

export default Letter;
