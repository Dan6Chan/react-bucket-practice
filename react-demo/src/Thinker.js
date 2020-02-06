import React from 'react';

class Thinker extends React.Component {

  render() {  
    console.log('render Thinker');

    let questionsA = [
      'Who am I?',
      'Where have I come?',
      'What is this place?',
      'What am I doing here?',
      'Where am I going?'
    ];

    return (
      <ul>
        {
          questionsA.map((question, index) => {
            return <li key={index}>{question}</li>;
          })
        }
      </ul>
    );
  }
}

export default Thinker;