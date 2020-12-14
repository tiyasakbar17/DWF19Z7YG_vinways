import React from 'react'
import Pic from '../img/Polygon1.png'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../Redux/Actions/AuthActions'
import { showPayment, showProfile } from '../Redux/Actions/PopUpActions'

function DropDown({ setClicked, Auth, logout, showPayment, showProfile }) {
    const history = useHistory();

    const payHandler = () => {
        //Open Pay Comp
        showPayment()
        setClicked(prevState => (!prevState))
    }
    const outHandler = () => {
        // LOGOUT
        logout()
        setClicked(prevState => (!prevState))
        history.push("/");
    }
    const addMusicHandler = () => {
        setClicked(prevState => (!prevState));
        history.push("/addmusic");
    }
    const addArtistHandler = () => {
        setClicked(prevState => (!prevState));
        history.push("/addartist");
    }
    const transactionHandler = () => {
        setClicked(prevState => (!prevState));
        history.push("/transaction");
    }
    const showUser = () => {
        showProfile()
        setClicked(prevState => (!prevState))
    }

    return (
        < div className="d-flex flex-column col text-center white dDown" >
            <img src={Pic} alt="" className="segitiga" />
            {(Auth.userData.role === 2) ? (
                <>
                    <div onClick={showUser} className="d-flex justify-content-between align-items-center DownItem pointer">
                        <span>Profile</span><i className="fas fa-user-cog"></i>
                    </div>
                    <div onClick={payHandler} className="d-flex justify-content-between align-items-center DownItem pointer">
                        <span>Pay</span><i className="fas fa-receipt"></i>
                    </div>
                </>
            ) : (<>
                <div onClick={addMusicHandler} className="d-flex justify-content-between align-items-center DownItem pointer">
                    <span>Add Music</span><i className="fas fa-music"></i>
                </div>
                <div onClick={addArtistHandler} className="d-flex justify-content-between align-items-center DownItem pointer">
                    <span>Add Artist</span><i className="fas fa-microphone-alt"></i>
                </div>
                <div onClick={transactionHandler} className="d-flex justify-content-between align-items-center DownItem pointer">
                    <span>Transactions</span><i className="fas fa-receipt"></i>
                </div></>)}
            <div className="dropdown-divider" />
            <div onClick={outHandler} className="d-flex justify-content-between align-items-center DownItem pointer">
                <span>Logout</span><i className="fas fa-sign-out-alt"></i>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps, { logout, showPayment, showProfile })(DropDown);
