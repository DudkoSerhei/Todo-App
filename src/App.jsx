import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';
import AddTodo from './components/AddTodo';
import { Footer } from './components/Footer';
import { TodoList } from './components/TodoList';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
}

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
)(TodoList);

export const App = () => (
  <div className="Content">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
