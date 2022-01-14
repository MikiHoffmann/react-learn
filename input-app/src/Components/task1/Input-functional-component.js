import React, {useState} from 'react'

export default function InputFunctionalComponent() {

    const [startText, setText] = useState('Miki')
    const changeHandler = (e) => {

        setText(e.target.value)
    }
    return (
        <div className='sectionTask'>
            <input value={startText} onInput={changeHandler}/>
            <br/><br/>
            <span className='outputText'>Function: Hello {startText}.</span>
        </div>
    )
}
