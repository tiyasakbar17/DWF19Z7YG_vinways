import React from 'react'
import Actions from '../Context/Actions';


function PopUp({ action, message }) {

    const clickHandler = () => {
        // CLOSE POPUP
        action.POPUP({ message: '' })
    }

    return (
        <div className="d-flex justify-content-center align-items-center popUp green">
            <span onClick={() => clickHandler()} className="closer">X</span>
            <span>{message}</span>
        </div>
    )
}

export default Actions(PopUp);
