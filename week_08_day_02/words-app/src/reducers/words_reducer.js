const wordsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_WORD':
    const newState = [...state, action.newWord]
    return newState;
    default:
    return state;
  }
}

export default wordsReducer;
