import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ counter, increment, decrement, times, divide }) => {
  console.log('render Counter');
  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={times}>*</button>
      {' '}
      <button onClick={divide}>/</button>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  times: PropTypes.func.isRequired,
  divide: PropTypes.func.isRequired
};

export default Counter;