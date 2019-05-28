import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCountry: ''
    }

    this.handleSelect = this.handleSelect.bind(this);

  }

  componentDidMount(){
    this.props.getData();
  }

  createOptions(){
    return this.props.data.map((country, index) => {
      return <option key={index} value={index}>{country.name}</option>
    })
  }

  handleSelect(event){

    this.props.updateBucketList(event.target.value);
  }






  render(){
    return(
      <div>
      <label>Add to bucket-list</label>
      <select onChange={this.handleSelect}>{this.createOptions()}</select>
      </div>
    )
  }




}

const mapDispatchToProps = (dispatch) => {
  return{
    getData: () => {
      dispatch(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>{
          const updatedData = data.map((country) => {
            country.bucketList = false
            return country
          })
          dispatch({
            type: 'ADD_DATA',
            data: updatedData
          })
        })
      })
    },
    updateBucketList: (index) => {
      console.log('working');
      dispatch({
        type: 'ADD_TO_BUCKETLIST',
        index: index
      })
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{

    data: state

  }
}




export default connect(mapStateToProps, mapDispatchToProps)(SelectCountry);
