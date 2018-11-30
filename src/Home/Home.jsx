import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import styles from './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name:'',
    }
  }

  handleChange(name) {
    this.setState({
      name: name
    })
  }

  render() {
    const { name } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <input type='input' placeholder='NAME' maxLength='20' className={styles.user} onChange={(event) => this.handleChange(event.target.value)}></input>
        </div>
        <Link to={{pathname: `/play/${name}/easy`}}>
          <Button level={0}/>
        </Link>
        <Link to={{pathname: `/play/${name}/medium`}}>
          <Button level={1}/>
        </Link>
        <Link to={{pathname: `/play/${name}/hard`}}>
          <Button level={2}/>
        </Link>
      </div>
    )
  }
}

export default Home;
