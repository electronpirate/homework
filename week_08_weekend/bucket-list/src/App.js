import React from 'react';
import SelectCountryContainer from './containers/SelectCountryContainer';
import './App.css';

const App = (props) => {
  return (
    <>
      <h1>Country Bucket-list</h1>
      <SelectCountryContainer />
    </>
  );
};

export default App;
