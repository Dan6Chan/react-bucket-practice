import React from 'react';
import { Route, Prompt } from 'react-router-dom';
import PropTypes from "prop-types";
import SayHello from './SayHello';

class Hello extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements[0].value;
    const path = `${this.props.match.url}/${name}`;
    this.props.history.push(path);
  }

  render() {
    console.log('render Hello');
    const { match } = this.props;
    return (
      <div>
        <h2>Hello React-Router!</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name"/>{' '}
          <button type="submit">Go</button>
        </form>
        <Route path={`${match.url}/:name`} component={SayHello} />
        <Prompt 
          when={true} 
          message={location => (`Are you sue you want to go to ${location.pathname}?` )} 
        />
      </div>
    );
  }
}

export default Hello;