import { createAction } from 'redux-actions';
import type from './actionType';

export const increment  = createAction(type.COUNTER_ADD);
export const decrement  = createAction(type.COUNTER_MINUS);
export const times      = createAction(type.COUNTER_TIMES);
export const divide     = createAction(type.COUNTER_DIVIDE);

const actionCreators = {
  increment,
  decrement,
  times,
  divide
}

export default actionCreators;