import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentScore.css';

const CurrentScore = ({ score, name, difficulty }) => {
  return (
    <div className={styles.currentscore}>
      {score}
    </div>
  )
}

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default CurrentScore;
