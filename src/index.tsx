import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Route from './Route';

import { Provider } from 'react-redux';
import store from './redux/strore'

import './style.scss';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);