import React from 'react';
import styles from './Letter.css';

const Letter = ({ entry }) => {
  return (
    <div className={styles.letter}>
      {entry.show ? entry.letter : ''}
    </div>
  )
}

export default Letter;
