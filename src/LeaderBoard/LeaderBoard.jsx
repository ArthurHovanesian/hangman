import React from 'react';
import HighScore from '../HighScore/HighScore.jsx';
import Button from '../Button/Button.jsx';
import { Link } from 'react-router-dom';
import styles from './LeaderBoard.css';

const LeaderBoard = ({ leaderBoard, difficulty }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        HIGH SCORES - {difficulty.toUpperCase()}
      </div>
      <div className={styles.leaderBoard}>
        {leaderBoard.map((entry, index) => <HighScore name={entry.name} score={entry.score} key={index} rank={`rank${index + 1}`}/>)}
      </div>
      <Link to='/'>
        <Button style={{width: '100%'}} level={3}/>
      </Link>
    </div>
  )
}

export default LeaderBoard;
