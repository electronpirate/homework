import React from 'react';
import { connect } from 'react-redux';

const WordsList = (props) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.addWord(event.target.word.value)
  }

  const wordsList = () => {
    return props.list.map((word) => {
      return (
        <li>{word}</li>
      )
    })
  }

    return (
    <>
    <h1>Words</h1>
    <form id='words-form' onSubmit={handleFormSubmit}>
    <label for='word'>Add a new word: </label>
    <input type='text' name='word' id='word' />
    <input type='submit' value='Add Word' />
    </form>
    <ul id='words-list'>{wordsList()}</ul>
    </>
  )
}


export default WordsList;
