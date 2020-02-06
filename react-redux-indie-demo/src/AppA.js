import React from 'react';
import PropTypes from 'prop-types';
import { ADD_COUNT, REDUCE_COUNT } from './actionType';

class AppA extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleReduceClick = this.handleReduceClick.bind(this)
  }

  handleAddClick(event) {
    this.props.store.dispatch({ type: ADD_COUNT, payload: 1 });
  }

  handleReduceClick(event) {
    this.props.store.dispatch({ type: REDUCE_COUNT, payload: 1});
  }

  render() {
    console.log('render appA');
    console.log('react.state appA:' + JSON.stringify(this.state));
    return (
      <div>
        <h6>1. React State Count: {this.state.count}</h6>
        <h6>1. Store State Count: {this.props.store.getState().aReducer.count}</h6>
        <button onClick={this.handleAddClick}>+</button>
        <button onClick={this.handleReduceClick}>-</button>
      </div>
    );
  }
}

export default AppA;