let defaultState = {
  country: []
}

const mainReducer = (state = defaultState, action)=>{
  if(action.type === 'SELECT_COUNTRY'){
    return {
      ...state,
      country: action.country
    }
  }else {
    return{
      ...state
    }
  }
}

export default mainReducer;
