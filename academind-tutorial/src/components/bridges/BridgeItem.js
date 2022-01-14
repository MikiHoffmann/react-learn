import React from 'react'

export default function BridgeItem(props) {
    return (
        <li className='listItem'>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className='actions'>
                <button className='btn'>to my bridges</button>
            </div>
        </li>
    )
}
