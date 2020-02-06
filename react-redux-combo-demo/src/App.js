import React from 'react';
import TodoA from './TodoA';
import TodoB from './TodoB';

class App extends React.Component {

  render() {
    console.log('render App');
    console.log('react state App:' + JSON.stringify(this.state));
    return (
      <div>
        <TodoA />
        <hr />
        <TodoB />
      </div>
    );
  }
}

export default App;
