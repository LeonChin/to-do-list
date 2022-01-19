import React, { Component } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default class index extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    if (event.key !== "Enter") return;
    if (event.target.value.trim() === "") {
      alert("inputs cannot be empty");
    }
    const todoObj = { id: nanoid(), name: event.target.value, done: false };
    this.props.addTodo(todoObj);
    event.target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="please input to-do items and press enter"
        />
      </div>
    );
  }
}
