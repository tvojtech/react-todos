import React, {Component} from 'react';
import logo from './logo.svg';
import Todos from './components/Todos'

import store from './store'
import {Provider} from 'react-redux'

import './App.less';
import './App.scss';
import './App.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2 className="App-title"> ☢ custom-react-scripts ☢ </h2>
            <div className="App-subtitle"> allow custom config for create-react-app without ejecting</div>
          </div>

          <Todos/>
        </Provider>
      </div>
    )
  }
}

export default App;
