import React from 'react'
import logo from '../img/Vector.png'

function Header() {
    return (
        <div className="Header">
            <p className="white h2">C</p>
            <img className="logo" src={logo} alt="logo"/>
            <p className="green h2">Ways</p>
        </div>
    )
}

export default Header
