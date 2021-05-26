import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose,combineReducers } from "redux"
import thunk from 'redux-thunk'
import reducers from './redux/reducers/index'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './icons/all'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
