import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Footer from './Footer';
import { VisibleTodoList } from '../containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="Content">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
};

export default App;
