import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'',
      difficulty: ''
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <div>
          <input type='input' placeholder='NAME' maxLength='20' className={styles.user}></input>
        </div>
        <div>
          <button className={`${styles.difficulty} ${styles.easy}`}>EASY</button>
          <button className={`${styles.difficulty} ${styles.medium}`}>MEDIUM</button>
          <button className={`${styles.difficulty} ${styles.hard}`}>HARD</button>
        </div>
        <Link to='/play'>
          <button className={styles.start}>START</button>
        </Link>
      </div>
    )
  }
}

export default Home;
