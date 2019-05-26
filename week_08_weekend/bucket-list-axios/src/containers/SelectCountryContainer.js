import React from 'react';
import SelectCountry from '../components/SelectCountry';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';

class SelectCountryContainer extends React.Component{
  render() {
    return(
      <div>
      <h2>Country Bucket-list</h2>
      <SelectCountry handleSelect={this.props.loadCountry} country={this.props.country} />
      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return state
};

export default connect (mapStateToProps, actionCreators)(SelectCountryContainer);
