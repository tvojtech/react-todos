import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createRenderer} from 'fela'
import {Provider} from 'react-fela'

ReactDOM.render(
  <Provider renderer={createRenderer()} mountNode={document.getElementById('felaStyles')}>
    <App />
  </Provider>,
  document.getElementById('root')
);
