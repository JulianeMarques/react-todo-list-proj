import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with husband',
        completed: false
      },
      {
        id: 3,
        title: 'Walk the dogs',
        completed: false
      }
    ]
  }

  render () {
    
    return (
      <div>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
