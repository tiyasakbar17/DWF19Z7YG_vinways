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
        <div className="drpDown d-flex flex-column col text-center white">
            <img src={Pic} alt="" className="segitiga" />
            <div onClick={payHandler} className="col pointer">
                <p className="pt-2">Pay</p>
            </div>
            <div className="dropdown-divider"></div>
            <div className="col pointer" onClick={outHandler}>
                <p className="pt-1">Logout</p>
            </div>
        </div>
    )
}

export default Actions(DropDown);
