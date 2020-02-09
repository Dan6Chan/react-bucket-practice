// ------------------------------------
// Actions Creators
// ------------------------------------
import counterActionCreators from './action/CounterActionCreators';

// ------------------------------------
// Reducer
// ------------------------------------
import counterReducer from './reducers/CounterReducer';

// ------------------------------------
// Contianer
// ------------------------------------
import counter from './containers/CounterContainer';

export const CounterActionCreators = counterActionCreators;
export const CounterReducer = counterReducer;
export const Counter = counter;

export default {
  CounterActionCreators,
  CounterReducer,
  Counter
};  