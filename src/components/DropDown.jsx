import React from 'react'
import Pic from '../img/Polygon1.png'

function DropDown(props) {

    const payHandler = () => {
        props.setData(prevData => ({ ...prevData, paymentComp: true }))
        props.setClicked(prevState => (!prevState))
    }
    const outHandler = () => {
        props.setData(prevData => ({ ...prevData, isLogin: false }))
        props.setClicked(prevState => (!prevState))
    }

    return (
        <div className="drpDown d-flex flex-column col text-center white">
            <img src={Pic} alt="" className="segitiga" />
            <div onClick={payHandler} className="col pointer">
                <p className="pt-2">Pay</p>
            </div>
            <div class="dropdown-divider"></div>
            <div className="col pointer" onClick={outHandler}>
                <p className="pt-1">Logout</p>
            </div>
        </div>
    )
}

export default DropDown
