import React from 'react';
import './styles/App.css';

export const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span className="App-text">{children}</span>;
  }

  return (
    <a className="App-link"
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};
