import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div class='navBar'>

            <Link to='/'>
                <li>home</li>
            </Link>

            <Link to='/Task1'>
                <li>task1</li>
            </Link>

        </div>
    )
        
    
}