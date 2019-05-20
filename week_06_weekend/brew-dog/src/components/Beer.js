import React from 'react';

const Beer = (props) => {

  return (
    <div className='beer'>
    <h2>{props.name}</h2>
    <img src={props.image_url} />
    <h2>Tag Line: {props.tagline}</h2>
    <h3>{props.description}</h3>
    </div>
  )

};


export default Beer;
