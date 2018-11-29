import React from 'react';
import styles from './Lives.css';

class Lives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { attemptsLeft } = this.props;
    if (attemptsLeft === 6) {
      return (
        <div className={styles.container}>
          <svg height="300" className={`${styles.scale} ${styles.fade}`}>
            <polyline points="300,150 225,280 75,280 0,150 75,20 225,20 300,150 0,150 75,20 225,280 75,280 225,20" stroke="white" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
      )
    } else if (attemptsLeft === 5) {
      return (
        <div className={styles.container}>
          <svg height="300" className={styles.scale}>
            <polyline points="300,150 225,280 75,280 0,150 75,20 225,280 75,280 225,20 300,150 0,150" stroke="white" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
      )
    } else if (attemptsLeft === 4) {
      return (
        <div className={styles.container}>
          <svg height="300" className={styles.scale}>
            <polyline points="150,150 300,150 225,280 150,150 75,280 225,280 150,150 0,150 75,280 150,150 75,20 0,150" stroke="white" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
      )
    } else if (attemptsLeft === 3) {
      return (
        <div className={styles.container}>
          <svg height="300" className={styles.scale}>
            <polyline points="150,150 225,280 75,280 150,150 0,150 75,280 150,150 75,20 0,150" stroke="white" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
      )
    } else if (attemptsLeft === 2) {
      return (
        <div className={styles.container}>
          <svg height="300" className={styles.scale}>
            <polyline points="75,280 0,150 75,20 150,150 75,280 0,150 150,150" stroke="white" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
      )
    } else if (attemptsLeft === 1) {
      return (
        <div className={styles.container}>
          <svg height="300" className={styles.scale}>
            <polyline points="0,150 75,20 150,150 0,150" stroke="white" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
      )
    } else if (attemptsLeft === 0) {
      return (
        <div className={styles.container}>
          <svg height="300" className={styles.scale}>
          </svg>
        </div>
      )
    }
  }
}

export default Lives;
