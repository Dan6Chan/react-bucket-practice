import React from 'react';
import { NavLink } from 'react-router-dom';

class App extends React.Component {

  render () {
    console.log('render App');
    return (
      <div>
        <h1>React-Redux-Router-Demo</h1>
        <div style={{display: 'inline-block'}}>
          <ul>
            <li><NavLink to="/" exact activeStyle={{ color: 'red', fontWeight: 'bold'}}>Home</NavLink></li>
            <li><NavLink to="/counter" activeClassName='active'>Counter</NavLink></li>
            <li><NavLink to="/todo" activeClassName='active'>Todo</NavLink></li>
            <li><NavLink to="/hello" activeClassName='active'>Hello</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
