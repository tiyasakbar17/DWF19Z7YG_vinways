import React from 'react'
import Pic from '../img/Polygon1.png'
import Actions from '../Context/Actions'

function DropDown({ action, setClicked }) {

    const payHandler = () => {
        //Open Pay Comp
        action.PAYMENT()
        setClicked(prevState => (!prevState))
    }
    const outHandler = () => {
        // LOGOUT
        action.LOGOUT()
        setClicked(prevState => (!prevState))
    }

    return (
        <div className="d-flex flex-column col text-center white dDown">
            <img src={Pic} alt="" className="segitiga" />
            <div onClick={payHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                <span>Pay</span>
            </div>
            <div className="dropdown-divider" />
            <div onClick={outHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                <span>Logout</span>
            </div>
        </div>
    )
}

export default Actions(DropDown);
