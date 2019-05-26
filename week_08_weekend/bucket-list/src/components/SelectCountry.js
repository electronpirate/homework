import React, { Component } from 'react';

class SelectCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {

      country: []
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event){
    this.props.onSelectCountry(this.state.country);
    this.setState({ country: [] });
    console.log(this.state.country);


  }

  render() {
    return(
      <>
      <label>Add to Bucket List</label>
      <select value={this.state.country} onChange={this.handleSelectChange}>

      </select>
      </>
    )
  }
}

export default SelectCountry;
