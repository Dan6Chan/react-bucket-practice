
import { combineReducers } from 'redux';
import { ADD_COUNT, REDUCE_COUNT, ADD_MULTI_COUNT, REDUCE_MULTI_COUNT } from './actionType';

const defaultStateA = { count: 10 };
const defaultStateB = { count: 20 };

const aReducer = (state = defaultStateA, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COUNT:
      return { ...state, count: state.count + payload };
    case REDUCE_COUNT:
      return { ...state, count: state.count - payload };
    default: return state;
  }
};

const bReducer = (state = defaultStateB, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MULTI_COUNT:
      return { ...state, count: state.count + payload * 10 };
    case REDUCE_MULTI_COUNT:
      return { ...state, count: state.count - payload * 10 };
    default: return state;
  }
};

const reducers = combineReducers({
  aReducer,
  bReducer
});

export default reducers;