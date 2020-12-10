import React from 'react'
import { connect } from 'react-redux';
import { popUp } from '../Redux/Actions/PopUpActions'


function PopUp({ PopUpState, popUp }) {
    const { message } = PopUpState

    const clickHandler = () => {
        // CLOSE POPUP
        popUp("")
    }

    return (
        <div className="d-flex justify-content-center align-items-center popUp green">
            <span onClick={() => clickHandler()} className="closer">X</span>
            <span>{message}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { PopUpState: state.PopUp }
}

export default connect(mapStateToProps, { popUp })(PopUp);
