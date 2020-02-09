import { combineReducers } from 'redux';
import { CounterReducer } from '../modules/Counter';
import { TodoReducer } from '../modules/Todo';

const reducers = combineReducers({
  CounterReducer,
  TodoReducer
});

export default reducers;