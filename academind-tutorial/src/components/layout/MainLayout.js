import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function MainLayout(props) {
    return (
        <div>
            <NavBar/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
}
