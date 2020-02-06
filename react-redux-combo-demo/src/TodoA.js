import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreator';

class TodoListA extends React.Component {

  // UI Component
  render() {
    console.log('render tdoListA');
    console.log('react state tdoListA:' + JSON.stringify(this.state));
    let todoInput;
    const { todos, addTodoList, deleteTodoList } = this.props;
    return (
      <div>
        <ol>
          {
            todos.map((todo, index) => {
            return <li key={'A'+index}> {todo} <button onClick={ e => {
              e.preventDefault();
              deleteTodoList(index);
            }}>-</button></li>
            })
          }
        </ol>
        TodoA: <input id='todoIdA' type='text' value={todoInput?todoInput.value:todoInput} ref={input => {
                    todoInput = input
                 }}/>
              <button onClick={ e => {
                e.preventDefault();
                addTodoList(todoInput.value.trim());
                todoInput.value = "";
              }}>+</button>
      </div>
    );
  }
}

// react-redux
function mapStateToProps(state) {
  console.log('state A:' + JSON.stringify(state));
  return {
    todos: state.aReducer.todos? state.aReducer.todos:[]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoList: (todo) => dispatch(addTodo(todo)),
    deleteTodoList: (index) => dispatch(removeTodo(index)),
  }
}

// Continer Component
const TodoAppA = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListA)

export default TodoAppA;