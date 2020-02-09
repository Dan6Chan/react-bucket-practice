import type from '../action/actionType';
import { handleActions } from 'redux-actions';

const initialState = { todoList: [] };

// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
  [type.TODO_ADD]         : (state, action) => ({ ...state, todoList: [...state.todoList, action.payload] }),
  [type.TODO_ADD_MULTI]   : (state, action) => ({ ...state, todoList: [...state.todoList, ...action.payload] }),
  [type.TODO_REMOVE]      : (state, action) => ({ ...state, todoList: 
                              state.todoList.slice(0, action.payload).concat(
                              state.todoList.slice(action.payload + 1, state.todoList.length)) }),
  [type.TODO_REMOVE_ALL]  : (state, action) => ({ ...state, todoList: [] }),
}

const reducer = handleActions(actions, initialState)

export default reducer;