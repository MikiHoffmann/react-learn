import React, { Component } from "react";

export default class ClickCountClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me
        </button>
      </div>
    );
  }
}
