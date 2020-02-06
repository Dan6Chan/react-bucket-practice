import { ADD_TODO, REMOVE_TODO, ADD_BATCH_TODO, REMOVE_BATCH_TODO } from './actionType';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo: todo,
    }
  };
}

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    payload: {
      todoIndex: index,
    }
  };
}

export const addBatchTodo = (todos) => {
  return {
    type: ADD_BATCH_TODO,
    payload: {
      todos: todos,
    }
  };
}

export const removeBatchTodo = (todos) => {
  return {
    type: REMOVE_BATCH_TODO,
    payload: {}
  };
}