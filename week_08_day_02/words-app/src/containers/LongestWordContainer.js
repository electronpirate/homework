import { connect } from 'react-redux';
import LongestWord from '../components/LongestWord';

const mapStateToProps = (state) => {
  return {
    count: state.map((word) => {
      return word + ' = ' + word.length + ' characters'
    })
  }
}

export default connect(mapStateToProps)(LongestWord);
