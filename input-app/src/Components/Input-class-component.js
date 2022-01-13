import React, { Component } from 'react'

export default class InputClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Miki'}
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler(event) {
        this.setState({value:event.target.value})
    }
    render() {
        return (
            <div className='sectionTask'>
                <input placeholder={this.state.value} onInput={this.changeHandler}/>
                <br/><br/>
                <span className='outputText'>Class: Hello {this.state.value}.</span>
            </div>
        )
        
    }
}