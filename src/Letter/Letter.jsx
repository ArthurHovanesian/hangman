import React from 'react';
import styles from './Letter.css';

const Letter = ({ entry }) => {
  //is a table best option for word too long to fit screne?
  return (
    <div className={styles.letter}>
      {entry.show ? entry.letter : ''}
    </div>
  )
}

export default Letter;
