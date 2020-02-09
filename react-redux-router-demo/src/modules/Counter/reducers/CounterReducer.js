import type from '../action/actionType';
import { handleActions } from 'redux-actions';

const initialState = { counter: 0 };

// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
  [type.COUNTER_ADD]    : (state, action) => ({ ...state, counter: state.counter + action.payload }),
  [type.COUNTER_MINUS]  : (state, action) => ({ ...state, counter: state.counter - action.payload }),
  [type.COUNTER_TIMES]  : (state, action) => ({ ...state, counter: state.counter * action.payload }),
  [type.COUNTER_DIVIDE] : (state, action) => ({ ...state, counter: state.counter / action.payload }),
}

const reducer = handleActions(actions, initialState)

export default reducer;