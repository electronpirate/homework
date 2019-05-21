import { connect } from 'react-redux';
import LongestWord from '../components/LongestWord';

const mapStateToProps = (state) => {
  return {
    count: state.map((word) => {
      return <li>{word + ' = ' + word.length + ' characters'}</li>
    })
  }
}

export default connect(mapStateToProps)(LongestWord);
