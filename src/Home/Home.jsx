import React from 'react';
import { Link } from 'react-router-dom';
import DifficultyButton from '../DifficultyButton/DifficultyButton.jsx';
import styles from './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'',
      difficulty: '',
    }
  }

//make separare difficulty button component and pass in e,m,h as props
  render() {
    return (
      <div className={styles.container}>
        <div>
          <input type='input' placeholder='NAME' maxLength='20' className={styles.user}></input>
        </div>
        <DifficultyButton level={0}/>
        <DifficultyButton level={1}/>
        <DifficultyButton level={2}/>
        <Link to='/play'>
          <button className={styles.start}>START</button>
        </Link>
      </div>
    )
  }
}

export default Home;
