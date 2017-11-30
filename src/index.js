import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';
import PropTypes from 'prop-types';
import App from './App.jsx';

import './index.css';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
      <App />
    <Provider />,
    document.getElementById('root')
);
