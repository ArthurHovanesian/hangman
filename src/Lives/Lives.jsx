import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lives.css';

const Lives = ({ attemptsLeft }) => {
  const color = {
    1: 'red',
    2: '#FF4500',
    3: 'yellow',
    4: '#39FF14',
    5: '#00FFFF',
    6: '#FF0DBF'
  }

  const polygon = {
    1: '0,150 75,20 150,150 0,150',
    2: '75,280 0,150 75,20 150,150 75,280 0,150 150,150',
    3: '150,150 225,280 75,280 150,150 0,150 75,280 150,150 75,20 0,150',
    4: '150,150 300,150 225,280 150,150 75,280 225,280 150,150 0,150 75,280 150,150 75,20 0,150',
    5: '300,150 225,280 75,280 0,150 75,20 225,280 75,280 225,20 300,150 0,150',
    6: '300,150 225,280 75,280 0,150 75,20 225,20 300,150 0,150 75,20 225,280 75,280 225,20'
  }

  const renderLives = (lives) => {
    return (
      <svg height="300"
           className={`${styles.scale}`}
           style={{filter: `drop-shadow(0 0 10px ${color[lives]})`}}
      >
        <polyline points={polygon[lives]}
                  stroke={color[lives]}
                  strokeWidth="2"
        />
      </svg>
    )
  }

  return (
    <div className={styles.container}>
      <svg height="300"
           className={`${styles.scale} ${styles.dim}`}
      >
        <polyline points="300,150 225,280 75,280 0,150 75,20 225,20 300,150 0,150 75,20 225,280 75,280 225,20"
                  stroke="#424242"
                  strokeWidth="2"
        />
      </svg>
      {renderLives(attemptsLeft)}
    </div>
  )
}

Lives.propTypes = {
  attemptsLeft: PropTypes.number.isRequired,
};

export default Lives;
