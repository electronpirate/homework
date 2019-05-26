import React from 'react';

class SelectCountry extends React.Component{
  render(){
    return(
      <div>
      <label>Add to bucketlist</label>
      <select onChange={()=>{this.props.handleSelect()}}>{this.props.country}</select>
      </div>
    )
  }
}

export default SelectCountry;
