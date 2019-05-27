import React from 'react';
import SelectCountry from './components/SelectCountry';
import BucketList from './components/BucketList';

import './App.css';

const App = (props) => {
  return (
    <>
      <h1>Country Bucket-list</h1>
      <SelectCountry />
      <BucketList />
    </>
  );
};

export default App;
