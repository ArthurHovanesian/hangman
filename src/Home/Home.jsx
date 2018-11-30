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
          <input type='input' placeholder='Name' maxLength='20' className={styles.user}></input>
        </div>
        <div>
          <button className={styles.difficulty}>Easy</button>
          <button className={styles.difficulty}>Medium</button>
          <button className={styles.difficulty}>Hard</button>
        </div>
        <Link to='/play'>
          <button className={styles.start}>Start!</button>
        </Link>
      </div>
    )
  }
}

export default Home;
