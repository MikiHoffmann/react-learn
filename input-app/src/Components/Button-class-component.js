import React, { Component } from 'react'

export default class ButtonClassComponent extends Component {
    render() {
        const changeColor = (e) => {
            e.target.classList.toggle('blue')
        }
        const text = 'click me'
        return (
            <div className='sectionTask'>
                <button className='button' onClick={changeColor}>{text}</button>
            </div>
        )
    }
}