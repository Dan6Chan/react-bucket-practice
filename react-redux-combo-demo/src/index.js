import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers);

const render = () => {  
  console.log('render index');
  ReactDOM.render((
    <Provider store={store}>
      <h1>React-Redux-Lib-Demo</h1> 
      <App />
    </Provider>
    ), 
    document.getElementById('root'));
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
