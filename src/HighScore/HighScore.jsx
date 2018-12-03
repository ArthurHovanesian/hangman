import React from 'react';
import PropTypes from 'prop-types';
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

HighScore.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default HighScore;
