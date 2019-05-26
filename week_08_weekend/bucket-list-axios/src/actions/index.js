import axios from 'axios';

export function loadCountry(){
  return(dispatch)=>{
    return axios.get('https://restcountries.eu/rest/v2/all').then((response)=>{
      dispatch(selectCountry(response.data.name));
      console.log(response.data.name);
    })
  }
}

export function selectCountry(country){
  return {
    type: 'SELECT_COUNTRY',
    country: country
  }
}
