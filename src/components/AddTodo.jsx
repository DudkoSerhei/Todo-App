import React from 'react';
import { connect } from 'react-redux';
import './styles/App.css';

let nextTodoId = 0;
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="App-header">
      <input className="App-input" placeholder="Write todo" ref={node => {
        input = node;
      }} />
      <button className="App-btn" onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
