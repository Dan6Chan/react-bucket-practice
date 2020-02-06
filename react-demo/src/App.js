import React from 'react';
import Title from './Title';
import Thinker from './Thinker';
import Answer from './Answer';

class App extends React.Component {

  render() {
    console.log('render App');
    return (
      <div>
        <Title />
        <hr />
        <Thinker />
        <hr />
        <Answer place='the world' />
        <hr />        
      </div>
    );
  }
}

export default App;
