import React from 'react';

const LongestWord = (props) => {
  return (
    <div className='count'>
    <p>Characters in your words:</p>
    <ul>{props.count}</ul>
    </div>
  )
}

export default LongestWord;
