import React from 'react';
import styles from './Letter.css';

const Letter = ({ letter, show }) => {
  //is a table best option for word too long to fit screne?
  return (
    <div className={styles.letter}>
      {letter.letter.toUpperCase()}
    </div>
  )
}

export default Letter;
