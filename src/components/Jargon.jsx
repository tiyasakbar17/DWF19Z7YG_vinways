import React from 'react'
import logo from '../img/Vector (2).png'


function Jargon() {
    return (
        <div className="jargon">
            <p className="white noMargin">Listening is</p>
            <div className="kaset noMargin">
                <img src={logo} alt="logo"/>
                <p className="green noMargin">Everything</p>
            </div>
            <p className="pay noMargin">pay and access millions of songs</p>
        </div>
    )
}

export default React.memo(Jargon)
