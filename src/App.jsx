import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';
import './App.css';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const store = createStore(todoApp);
let nextTodoId = 0;

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

class App extends Component {
  render() {
    return (
      <header className="App-header">
        <input className="App-input" placeholder="Write todo" ref={node => {
          this.input = node;
        }} />
      <button className="App-btn" onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }}>
          Add TodoList
        </button>
        <ul className="App-list">
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </header>
    );
  }
}

export default App;
