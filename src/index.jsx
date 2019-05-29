import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import AppRouter from './router/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

 // "build": "webpack -p",