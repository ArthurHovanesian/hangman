import React from 'react';
import Letter from '../Letter/Letter.jsx';
import styles from './Word.css';

const Word = ({ reveal }) => {
  //auto-render ' and -
  return (
    <div className={styles.word}>
      {reveal.map((entry, index) => <Letter entry={entry} key={index}/>)}
    </div>
  )
}

export default Word
