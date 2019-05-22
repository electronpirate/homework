import React from 'react';

const LongestWord = (props) => {
  const list  = () => {
    return props.count.map((word) => {
      return (
        <li>{word}</li>
      )
    })
  }
  return (
    <div className='count'>
    <p>Characters in your words:</p>
    <ul>{list()}</ul>
    </div>
  )
}

export default LongestWord;
