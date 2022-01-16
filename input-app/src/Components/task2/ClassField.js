import React, { Component } from "react";

export default class ClassField extends Component {
  render() {
    return (
      <form className="taskForm">
        <input
          type="text"
          value={this.props.title}
          onChange={(e) => this.props.setInputTextHandler(e.target.value)}
        />
        <span className="output">My name: {this.props.title}, class.</span>
      </form>
    );
  }
}
