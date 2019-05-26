import { connect } from 'react-redux';
import SelectCountry from '../components/SelectCountry';

const mapDispatchToProps = (dispatch) => {
  return ({
    onSelectCountry: (country) => {
      dispatch(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countryData => {
          countryData.map((country) => {
            return country.bucketList = false
          })
          return dispatch({
            type: 'GET_COUNTRY',
            countryData: countryData.name
          })
        })

      })
    }
  });
}

export default connect(null, mapDispatchToProps)(SelectCountry);
