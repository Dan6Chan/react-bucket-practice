import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createAppStore from './store/createAppStore';
import Routes from './router/routes';
import './style/index.css';

// Store Initialization
// ------------------------------------
const store = createAppStore(window.__INITIAL_STATE__);

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  console.log('render index');
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    MOUNT_NODE
  );
};

// Run
// ------------------------------------
render();