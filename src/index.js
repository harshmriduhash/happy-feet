import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import appReducer from './Redux/state'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const store = createStore(appReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

