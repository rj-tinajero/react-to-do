import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

let id = 3;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Reschedule dentist appt', isCompleted: true, id: 0 },
        { description: 'Make personal flickr account', isCompleted: false, id: 1 },
        { description: 'Do thanksgiving offering', isCompleted: false, id: 2 }
      ],
      newDescription: ''
    };
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false, id };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
    id++
  }

  toggleComplete(index) {
    console.log(index);
    const todos = this.state.todos.slice();
    const todo = todos[index];
    console.log(todo);
    todo.isCompleted = !todo.isCompleted; 
    this.setState({ todos: todos });
  }

  deleteTodo(id) {
    if (window.confirm("Are you sure?")) {
      const newArr = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newArr
    });
    }
    
  }

  render() {
    return (
      <div className="App">
        <ul style={{listStyle: "none"}}>
          { this.state.todos.map( (todo, index) => 
            <ToDo key={ todo.id } index={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ this.toggleComplete } deleteTodo={ () => this.deleteTodo(todo.id) } />
            )}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } /> 
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
