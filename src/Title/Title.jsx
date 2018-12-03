import React from 'react';
import styles from './Title.css';
import Lives from '../Lives/Lives.jsx';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letteringTick: 0,
      logoTick: 0
    }
  }

  incrementLetteringSwitch() {
    this.setState(prevState => ({letteringTick: prevState.letteringTick + 1}));
  }

  incrementLogoSwitch() {
    this.setState(prevState => ({logoTick: (prevState.logoTick + 1) % 6}));
  }

  componentDidMount() {
    this.letteringSwitch = setInterval(() => this.incrementLetteringSwitch(), 50);
    this.logoSwitch = setInterval(() => this.incrementLogoSwitch(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.letteringSwitch);
    clearInterval(this.logoSwitch);
  }

  render() {
    const { letteringTick, logoTick } = this.state;
    const quickFlicker = letteringTick % 2 === 0 ? 'a' : 'off';
    const unevenFlicker = letteringTick % 10 === 0 || letteringTick % 7 === 0 ? 'off' : 's';
    const slowFlicker = letteringTick % 20 === 0 || letteringTick % 20 === 1 ? 'off' : 'o';
    return (
      <div className={styles.container}>
        <span className={styles.logo}>
          <Lives attemptsLeft={logoTick + 1}/>
        </span>
        <span className={styles.title}>
          <span className={styles.p}>P</span>
          <span className={styles[quickFlicker]}>A</span>
          <span className={styles[unevenFlicker]}>S</span>
          <span className={styles.s2}>S</span>
          <span className={styles.c}>C</span>
          <span className={styles[slowFlicker]}>O</span>
          <span className={styles.d}>D</span>
          <span className={styles.e}>E</span>
        </span>
      </div>
    )
  }
}

export default Title;
