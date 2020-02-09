import { createAction } from 'redux-actions';
import type from './actionType';

export const add        = createAction(type.TODO_ADD);
export const addMulti   = createAction(type.TODO_ADD_MULTI);
export const remove     = createAction(type.TODO_REMOVE);
export const removeAll  = createAction(type.TODO_REMOVE_ALL);

const actionCreators = {
  add,
  addMulti,
  remove,
  removeAll
}

export default actionCreators;