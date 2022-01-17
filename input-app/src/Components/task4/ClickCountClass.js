import React, { Component } from "react";

export default class ClickCountClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
      document.title = `You clicked ${this.state.count} times.`
    }
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times.`
    }
  render() {
    return (
      <div>
        <h2>CLASS</h2>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me
        </button>
      </div>
    );
  }
}
