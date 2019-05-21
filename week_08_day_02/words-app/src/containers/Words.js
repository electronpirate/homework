import { connect } from 'react-redux';
import WordsList from '../components/WordsList';






const mapStateToProps = (state) => {
  return {
    list: state
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addWord: (evt) => {
      dispatch({ type: 'ADD_WORD', newWord: evt })
    },
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(WordsList);
