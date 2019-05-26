import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import ReactDOM from 'react-dom';
import SelectCountryContainer from './containers/SelectCountryContainer';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
  render() {
    return(
      <div>
      <SelectCountryContainer />
      </div>
    )
  }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
