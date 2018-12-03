import React from 'react';
import styles from './HighScore.css';

const HighScore = ({ name, score, rank }) => {
  return (
    <tr className={styles.row}>
      <td id={styles.name} className={`${styles[rank]}`}>
        {name}
      </td>
      <td id={styles.score} className={`${styles[rank]}`}>
        {score}
      </td>
    </tr>
  )
}

export default HighScore;
