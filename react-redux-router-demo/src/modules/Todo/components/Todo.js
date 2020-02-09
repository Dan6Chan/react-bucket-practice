import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {

  static propTypes = {
    todoList: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired,
    addMulti: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    removeAll: PropTypes.func.isRequired
  }

  render() {
    console.log('render Todo');
    const { todoList, add, addMulti, remove, removeAll } = this.props;
    return (
      <div>
        <h2>TodoList:</h2>
        <div style={{ display: 'inline-block' }}>
          <ol>
            {
              todoList.map((todo, index) => (
                <li key={'todo' + index}>{todo}{" "}<button onClick={e => { remove(index) }}>-</button></li>
              ))
            }
          </ol>
        </div>
        <div>
          Todo (separate by ,):
          <input id='todoInput' type='text' ref={"todoInput"} />
          {" "}
          <button onClick={e => {
            add(this.refs.todoInput.value.trim());
            this.refs.todoInput.value = '';
          }}>+</button>
          {" "}
          <button onClick={e => {
            addMulti(this.refs.todoInput.value.trim());
            this.refs.todoInput.value = '';
          }}>++</button>
          {" "}
          <button onClick={removeAll}>--</button>
        </div>
      </div>
    );
  }
}

export default Todo;
