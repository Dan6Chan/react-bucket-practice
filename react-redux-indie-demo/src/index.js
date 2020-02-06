import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppA';
import SubApp from './AppB';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducers from './reducers';

// store
const store = createStore(reducers);

const render = () => {
  console.log('render index');
  console.log('store.state:' + JSON.stringify(store.getState()));
  ReactDOM.render(
    (
      <div>
        <h1>React-Redux-Demo</h1>
        <App store={store} />
        <SubApp store={store} />
      </div>
    ), 
  document.getElementById('root'));
}
render();

/* 
  will re-render whole app when any state attribute is changed
*/
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
