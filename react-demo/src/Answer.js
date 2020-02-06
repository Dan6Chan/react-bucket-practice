import React from 'react';

class Answer extends React.Component {
    
  constructor(props) {
    super(props);
    this.myTextInput = React.createRef();
    this.state = {
      name: 'Daniel'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ name: this.myTextInput.current.value });
  }
  
  render() {
    console.log('render Answer');

    let questionB = [
      <li key='a'>I am {this.state.name}</li>,
      <li key='b'>I come from {this.props.place}</li>,
      <li key='c'>This place is React</li>,
      <li key='d'>I am coding here</li>,
      <li key='e'>I am going to GitHub</li>
    ];
    
    return (
      <div>
        <ol>
          {questionB}
        </ol>
        Your Name: <input type="text" ref={this.myTextInput} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Answer;