import React from 'react';
import { Todo } from './Todo';
import './styles/App.css';

export const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul className="App-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);
