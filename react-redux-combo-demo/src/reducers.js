import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO, ADD_BATCH_TODO, REMOVE_BATCH_TODO } from './actionType';

const defaultState = { todos: [] };
const aReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload.todo]};
    case REMOVE_TODO:
      return { ...state, todos: 
        state.todos.slice(0,payload.todoIndex).concat(
          state.todos.slice(payload.todoIndex + 1, state.todos.length))
      };
    default: return state;
  }
};

const bReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BATCH_TODO:
      return { ...state, todos: [...state.todos, ...payload.todos]};
    case REMOVE_BATCH_TODO:
      return { ...state, todos: []};
    default: return state;
  }
};

const reducers = combineReducers({
  aReducer,
  bReducer
});

export default reducers;