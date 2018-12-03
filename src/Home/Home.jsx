import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import Title from '../Title/Title.jsx';
import styles from './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleNoName = this.handleNoName.bind(this);
    this.state = {
      name: '',
      placeholder: 'NAME',
    }
  }

  handleChange(name) {
    const lowerCase = name.toLowerCase();
    if ((lowerCase.charCodeAt(name.length - 1) >= 97 && lowerCase.charCodeAt(name.length - 1) <= 122) || (lowerCase.charCodeAt(name.length - 1) >= 48 && lowerCase.charCodeAt(name.length - 1) <= 57)) {
      this.setState({name: name});
    } else {
      this.setState({name: name.slice(0, -1)});
    };
  }

  handleNoName() {
    this.setState({placeholder: 'PLEASE ENTER NAME'});
  }

  render() {
    const { name, placeholder } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <Title />
        </div>
        <div>
          <input type="input"
                 placeholder={placeholder}
                 value={name} maxLength="10"
                 className={styles.user}
                 onChange={(event) => this.handleChange(event.target.value)}
          >
          </input>
        </div>
        {name === '' ? (
          <div>
            <Button level={0}
                    handleNoName={this.handleNoName}
            />
            <Button level={1}
                    handleNoName={this.handleNoName}
            />
            <Button level={2}
                    handleNoName={this.handleNoName}
            />
          </div>
        ) : (
          <div>
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
        )}

      </div>
    )
  }
}

export default Home;
