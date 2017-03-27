import ReactDOM from 'react-dom';
import React from 'react';
import * as SessionActions from './actions/session_actions';
import {configureStore} from './store/store.js';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
  window.signup = SessionActions.signup;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
