import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { Provider, provider } from 'react-redux';
import store from './App/store';
import Link from 'react-router-dom';

// Extra additions from here

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js ';


ReactDOM.render( <
    React.StrictMode >
    <
    Provider store = { store } >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> </
    Provider >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();