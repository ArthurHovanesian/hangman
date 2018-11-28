import React from 'react';

const Letter = ({letter, index}) => {
  //is a table best option for word too long to fit screne?
  return (
    <td>
      {letter}
    </td>
  )
}

export default Letter;
