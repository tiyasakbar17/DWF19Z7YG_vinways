import React from 'react'
import Pic from '../img/Polygon1.png'
import { AppContext } from '../Context/AppContext'

function DropDown(props) {

    const [dispatch] = React.useContext(AppContext)

    const payHandler = () => {
        //Open Pay Comp
        dispatch({
            type: "PAYMENT"
        })
        props.setClicked(prevState => (!prevState))
    }
    const outHandler = () => {
        // LOGOUT
        dispatch({
            type: "LOGOUT"
        })
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
