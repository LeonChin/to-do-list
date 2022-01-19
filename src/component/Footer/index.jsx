import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleChange = (event) => {
    this.props.selectAll(event.target.checked);
  };

  handleClick = () => {
    this.props.deleteAllDone();
  };
  render() {
    const { todos } = this.props;
    const total = todos.length;
    const doneNum = todos.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={doneNum === total && total > 0 ? true : false}
          />
        </label>
        <span>
          <span>done {doneNum}</span> / all {total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClick}>
          delete all done
        </button>
      </div>
    );
  }
}
