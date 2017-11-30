import React from 'react';
import './styles/App.css';

export const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li className="App-item"
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none',
        color: completed ?
          '#4C77A6' :
          'inherit'
    }
  }
  >
    {text}
  </li>
);
