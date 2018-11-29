import React from 'react';
import styles from './CurrentScore.css';

const CurrentScore = ({ score }) => {
  return (
    <h1 className={styles.currentscore}>{score}</h1>
  )
}

export default CurrentScore;
