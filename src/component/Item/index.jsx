import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
export default class Item extends Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleChange = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;

    const { mouse } = this.state;

    return (
      <li
        className="item"
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChange(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(id)}
          style={{ display: mouse ? "block" : "none" }}
        >
          delete
        </button>
      </li>
    );
  }
}
