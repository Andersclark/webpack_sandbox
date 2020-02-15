import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  // enables hot module replacement
  module.hot.accept();
}
