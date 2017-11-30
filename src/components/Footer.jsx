import React from 'react';
import FilterLink from './FilterLink';
import './styles/App.css';

export const Footer = () => (
  <div className="App-footer">
    <p className="App-title">Show :</p>
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </div>
);
