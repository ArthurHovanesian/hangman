import React from 'react';
import styles from './HighScore.css';

const HighScore = ({ name, score }) => {
  return (
    <div>
      <span>
        {name}
      </span>
      <span>
        {score}
      </span>
    </div>
  )
}

export default HighScore;
