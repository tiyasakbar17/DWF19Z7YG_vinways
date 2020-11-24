import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Vector.png'

function Header() {
    return (
        <Link to="/login" >
            <div className="Header">

                <p className="white h2">C</p>
                <img className="logo" src={logo} alt="logo" />
                <p className="green h2">Ways</p>
            </div>
        </Link>
    )
}

export default Header
