import React from 'react';
import styles from './Lives.css';

class Lives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <svg height="300" className={`${styles.scale} styles.fade`}>
            <polyline points="300,150 225,280 75,280 0,150 75,20 225,20 300,150 0,150 75,20 225,280 75,280 225,20" fill="white" stroke="black" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
        <div className={styles.container}>
          <svg height="300" className={styles.scale}>
            <polyline points="300,150 225,280 75,280 0,150 75,20 225,280 75,280 225,20 300,150 0,150" fill="white" stroke="black" stroke-width="2" fill-rule="nonzero"/>
          </svg>
        </div>
      </div>
    )
  }
}


export default Lives;
