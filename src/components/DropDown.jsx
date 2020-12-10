import React from 'react'
import Pic from '../img/Polygon1.png'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../Redux/Actions/AuthActions'
import { showPayment } from '../Redux/Actions/PopUpActions'

function DropDown({ setClicked, Auth, logout, showPayment }) {
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
        history.push("/addmusic");
        setClicked(prevState => (!prevState));
    }
    const addArtistHandler = () => {
        history.push("/addartist");
        setClicked(prevState => (!prevState));
    }
    const transactionHandler = () => {
        history.push("/transaction");
        setClicked(prevState => (!prevState));
    }

    return (
        < div className="d-flex flex-column col text-center white dDown" >
            <img src={Pic} alt="" className="segitiga" />
            {(Auth.userData.role === 2) ? (
                <div onClick={payHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                    <span>Pay</span>
                </div>
            ) : (<>
                <div onClick={addMusicHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                    <span>Add Music</span>
                </div>
                <div onClick={addArtistHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                    <span>Add Artist</span>
                </div>
                <div onClick={transactionHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                    <span>Transactions</span>
                </div></>)}
            <div className="dropdown-divider" />
            <div onClick={outHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                <span>Logout</span>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps, { logout, showPayment })(DropDown);
