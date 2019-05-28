import React from 'react';
import { connect } from 'react-redux';

const BucketList = (props) => {


  const bucketList = ()=>{
    const filteredCountries = props.updatedData.filter((country) => {
      return country.bucketList

    })

    return filteredCountries.map((filteredCountry, index) => {
      return <li key={index}>{filteredCountry.name}</li>
    })
  }



  return(
    <div>
    <h2>Bucket List:</h2>
    <ol>{bucketList()}</ol>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    updatedData: state

  }

}




export default connect(mapStateToProps)(BucketList);
