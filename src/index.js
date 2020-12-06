import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "trim-redux";
import {Router} from "react-router-dom";
import store from './store';
import history from "./components/main/history";
import 'bootstrap/dist/css/bootstrap.css';
import "./components/assets/style.css";


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
