import React, { Component } from 'react'

export default class InputClassComponent extends Component {
    render() {

        
        const changeColor = (e) => {
            e.target.classList.toggle('blue')
        }
        const text = 'click me'
        const ButtonName = <button className='button' onClick={changeColor}>{text}</button>
        
        return (
            ButtonName
        )
    }
}
