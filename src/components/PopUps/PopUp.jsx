import React from 'react'
import { connect } from 'react-redux';
import { popUp } from '../../Redux/Actions/PopUpActions'


function PopUp({ PopUpState, popUp }) {
    const { message } = PopUpState

    const clickHandler = () => {
        // CLOSE POPUP
        popUp("")
    }

    return (
        <div className="loadingPage" onClick={() => clickHandler()}>
            <div className="d-flex justify-content-center align-items-center popUp green">
                <span className="closer"><i className="fas fa-times-circle"></i></span>
                <span>{message}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { PopUpState: state.PopUp }
}

export default connect(mapStateToProps, { popUp })(PopUp);
