import React from 'react';

class Title extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1.0
    };
  }

  componentDidMount() {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  }

  render() {
    console.log('render Title');
    return (
      <h1 style={{opacity: this.state.opacity}}>
        React-Demo
      </h1>
    );
  }
}

export default Title;