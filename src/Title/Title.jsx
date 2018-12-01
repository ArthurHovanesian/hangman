import React from 'react';
import styles from './Title.css';
import Lives from '../Lives/Lives.jsx';

const Title = () => {

  const x = () => {
    setInterval(() => {

    })
  }

  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        <Lives attemptsLeft={6}/>
      </span>
      <span className={styles.title}>
        <span className={styles.p}>P</span>
        <span className={styles.a}>A</span>
        <span className={styles.s}>S</span>
        <span className={styles.s2}>S</span>
        <span className={styles.c}>C</span>
        <span className={styles.o}>O</span>
        <span className={styles.d}>D</span>
        <span className={styles.e}>E</span>
      </span>
    </div>
  )
}

export default Title;
