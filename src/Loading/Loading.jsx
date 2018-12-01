import React from 'react';
import styles from './Loading.css';

const Loading = ({ score }) => {
  const round = score + 1;
  return (
    <div className={styles.loading}>
      <h1 class>Round {round}</h1>
    </div>
  )
}

export default Loading;
