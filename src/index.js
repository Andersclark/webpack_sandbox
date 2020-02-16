import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './js/App';

// eslint-disable-next-line
ReactDOM.render(  <App />,  document.getElementById('root'));

// Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept();
}
