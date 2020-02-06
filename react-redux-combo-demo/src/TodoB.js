import React from 'react';
import { connect } from 'react-redux';
import { addBatchTodo, removeBatchTodo } from './actionCreator';

class TodoListB extends React.Component {

  // UI Component
  render() {
    console.log('render tdoListB');
    console.log('react state tdoListB:' + JSON.stringify(this.state));
    let todoInput;
    const { todos, addTodoListBatch, deleteTodoListBatch } = this.props;

    return (
      <div>
        <ol>
          {
            todos.map((todo, index) => {
            return <li key={'B'+index}> {todo}</li>
            })
          }
        </ol>
        TodoB Batch(separate by ,): <input id='todoIdB' type='text' value={todoInput?todoInput.value:todoInput} ref={input => {
                    todoInput = input
                 }}/>
              <button onClick={ e => {
                e.preventDefault();
                addTodoListBatch(todoInput.value.trim());
                todoInput.value = "";
              }}>+</button>
              <button onClick={ e => {
                e.preventDefault();
                deleteTodoListBatch();
              }}>-</button>
      </div>
    );
  }
}

// react-redux
function mapStateToProps(state) {
  console.log('state B:' + JSON.stringify(state));
  return {
    todos: state.bReducer.todos? state.bReducer.todos:[],
    /* 
      react-redux will only re-render the components 
      which subscribed a changing state attribute

      example:
      todosa: state.aReducer.todos? state.aReducer.todos:[]
    */
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoListBatch: (todos) => dispatch(addBatchTodo(todos.split(','))),
    deleteTodoListBatch: () => dispatch(removeBatchTodo()),
  }
}

// Continer Component
const TodoAppB = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListB)

export default TodoAppB;