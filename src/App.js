import React, {Component} from 'react';
import logo from './logo.svg';
import Todos from './components/Todos'

import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main-container">
          <div className="header">
            <img src={logo} alt="logo" className="logo"/>
          </div>
          <div className="content">
            <Todos/>
          </div>
          <div className="footer">
            footer
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
