import React, { Component } from "react";

export default class ClassField extends Component {
    constructor(inputText) {
        super(inputText)
        this.inputText = {value: 'Miki'}
    }
    textHandler = (e) => {
        this.setState({value:e.target.value})
    }
  render() {
    return (
      <form className="taskForm">
        <input type="text" value={this.inputText.value} onchange={this.textHandler}/>
        <span className='output'>My name: {this.inputText.value}, class.</span>
      </form>
    );
  }
}
