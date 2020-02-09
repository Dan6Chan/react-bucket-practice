import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../modules/App';
import Home from '../modules/Home';
import { Counter } from '../modules/Counter';
import { Todo } from '../modules/Todo';
import { Hello } from '../modules/Hello'

const Routes = () => (
  <BrowserRouter>
    <div style={{ textAlign: 'center' }}>
      <App />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/todo" component={Todo} />
        <Route path="/hello" component={Hello} />
        <Redirect from="/*" to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;