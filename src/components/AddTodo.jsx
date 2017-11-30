import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';
import './styles/App.css';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="App-header">
      <input className="App-input" placeholder="Write todo" ref={node => {
        input = node;
      }} />
    <input type="submit" value="Add Todo" className="App-btn" onClick={() => {
      dispatch(addTodo(input.value));
      input.value = '';
      }} />
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
