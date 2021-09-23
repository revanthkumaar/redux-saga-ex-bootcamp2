import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//dependencies for redux and redux saga
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "./redux";
import logger from 'redux-logger'


//setup saga - creating instance of saga in react app
const sagaMiddleware = createSagaMiddleware()

let store = createStore(reducer,applyMiddleware(sagaMiddleware,logger))

sagaMiddleware.run()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
