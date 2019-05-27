import React, { Component } from 'react';

class SelectCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCountry: []
    }
  }


  render(){
    return(
      <div>
      <label>Add to bucket-list</label>
      <select></select>
      </div>
    )
  }




}




export default SelectCountry;
