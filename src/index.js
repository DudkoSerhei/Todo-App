import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';
import App from './App.jsx';

import './index.css';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const store = createStore(todoApp);

const render = () => {
  ReactDOM.render(
    <App todos={store.getState().todos} />,
    document.getElementById('root'));
}
store.subscribe(render);
render();
