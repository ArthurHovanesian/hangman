import React from 'react';
import Letter from '../Letter/Letter.jsx';

const Word = ({word}) => {
  return (
    <table>
      <tr>
        {word.map((letter, index) => <Letter letter={letter} index={index}/>)}
      </tr>
    </table>
  )
}

export default Word
