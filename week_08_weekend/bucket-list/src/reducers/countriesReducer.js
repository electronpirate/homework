const countriesReducer = (state = [], action) => {
switch(action.type){
  case 'ADD_DATA':
  console.log(action.data);
  return [...state, ...action.data]
  case 'ADD_TO_BUCKETLIST':
  
  default:
  return state
}


}


export default countriesReducer;
