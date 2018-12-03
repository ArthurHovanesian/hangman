import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';

const Loading = ({ score }) => {
  const round = score + 1;
  return (
    <div className={styles.loading}>
      <h1>
        Round {round}
      </h1>
    </div>
  )
}
Loading.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Loading;
