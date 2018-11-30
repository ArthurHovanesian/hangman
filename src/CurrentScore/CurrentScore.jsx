import React from 'react';
import styles from './CurrentScore.css';

const CurrentScore = ({ score, name, difficulty }) => {
  return (
    <div className={styles.currentscore}>
      <div>
        {name}
      </div>
      <div>
        {difficulty}
      </div>
      <div>
        {score}
      </div>
    </div>
  )
}

export default CurrentScore;
