import React from 'react';
import PropTypes from 'prop-types';
import { ADD_MULTI_COUNT, REDUCE_MULTI_COUNT } from './actionType';

class AppB extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = {
      count: 2
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleReduceClick = this.handleReduceClick.bind(this)
  }

  handleAddClick(event) {
    this.props.store.dispatch({ type: ADD_MULTI_COUNT, payload: 1 });
  }

  handleReduceClick(event) {
    this.props.store.dispatch({ type: REDUCE_MULTI_COUNT, payload: 1});
  }

  render() {
    console.log('render appB');
    console.log('react.state appB:' + JSON.stringify(this.state));
    return (
      <div>
        <h6>2. React State Count: {this.state.count}</h6>
        <h6>2. Store State Count: {this.props.store.getState().bReducer.count}</h6>
        <button onClick={this.handleAddClick}>+</button>
        <button onClick={this.handleReduceClick}>-</button>
      </div>
    );
  }
}

export default AppB;