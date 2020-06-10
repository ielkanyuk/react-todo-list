import React from 'react';
import TodoList from './TodoList';

export default class App extends React.Component {
  state = {
    todos: [
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: false},
    ],
  };

  render() {
    return (
      <div className="container">
        <h1>Todo list</h1>

        <div className='input-field'>
          <input type='text'/>
          <label>Todo name</label>
        </div>

        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
