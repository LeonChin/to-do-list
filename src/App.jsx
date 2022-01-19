import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "workout", done: true },
      { id: "002", name: "cook", done: false },
      { id: "003", name: "study", done: true },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };

  updateTodo = (id, done) => {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else return todo;
    });

    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;

    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });

    this.setState({ todos: newTodos });
  };

  selectAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos: newTodos });
  };

  deleteAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.done === false;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            selectAll={this.selectAll}
            deleteAllDone={this.deleteAllDone}
          />
        </div>
      </div>
    );
  }
}
