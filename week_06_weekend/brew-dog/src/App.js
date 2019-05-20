import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
// import Beer from './components/Beer';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      categories: ['name', 'first_brewed', 'food_pairing']

    }
  };

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {
      this.setState({ beers: data })
    })
  }



  // getBeer = async () => {
  //
  //   const api_call = await fetch('https://punkapi.com/documentation/v2');
  //   const data = await api_call.json();
  //   console.log(data);
  // }
  render(){

    return (
      <div>
      <Titles />
      <Form categories={this.state.categories}
            beers={this.state.beers}
      />


      </div>
    );
  }
}

export default App;
