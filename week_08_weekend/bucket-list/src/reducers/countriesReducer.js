const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_COUNTRY':

      return [...state, action.countryData]
    default:
      return state
  }
}

export default countriesReducer;
