import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
// eslint-disable-next-line no-undef
require ( '../../node_modules/typeface-open-sans' );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


