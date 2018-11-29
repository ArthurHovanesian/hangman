import React from 'react';
import Letter from '../Letter/Letter.jsx';
import styles from './Word.css';

const Word = ({ reveal }) => {
  //auto-render ' and -
  return (
    <div className={styles.word}>
      {reveal.map((letter, index) => <Letter letter={letter} index={index}/>)}
    </div>
  )
}

export default Word
