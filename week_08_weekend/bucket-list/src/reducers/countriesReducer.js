const countriesReducer = (state = [], action) => {
switch(action.type){
  case 'ADD_DATA':
  console.log(action.data);
  return [...state, ...action.data]
  case 'ADD_TO_BUCKETLIST':

  return state.map((country, index) => {

    if(index !== Number(action.index)){
      return country
    }
    return {...country, bucketList: true}
  })

  default:
  return state
}


}


export default countriesReducer;
