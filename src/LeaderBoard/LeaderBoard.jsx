import React from 'react';
import HighScore from '../HighScore/HighScore.jsx';
import styles from './LeaderBoard.css';

const LeaderBoard = ({ leaderBoard }) => {
  return (
    <div>
      {leaderBoard.map((entry, index) => <HighScore name={entry.name} score={entry.score} index={index}/>)}
    </div>
  )
}

export default LeaderBoard;
