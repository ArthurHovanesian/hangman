import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import styles from './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'',
      difficulty: '',
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <input type='input' placeholder='NAME' maxLength='20' className={styles.user}></input>
        </div>
        <Link to='/play'>
          <Button level={0}/>
          <Button level={1}/>
          <Button level={2}/>
        </Link>
      </div>
    )
  }
}

export default Home;
