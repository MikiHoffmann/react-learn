import React, {useState} from 'react'

export default function FunctionalInput() {

    const [startText, setText] = useState('Miki')
    const changeHandler = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <input value={startText} onInput={changeHandler}/>
            <br/><br/>
            <span className='outputText'>Hello {startText}.</span>
        </div>
    )
}
