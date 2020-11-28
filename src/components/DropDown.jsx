import React from 'react'
import Pic from '../img/Polygon1.png'
import Actions from '../Context/Actions'
import { useHistory } from 'react-router-dom'

function DropDown({ action, setClicked }) {

    const history = useHistory();

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
    const addMusicHandler = () => {
        history.push("/addmusic");
        setClicked(prevState => (!prevState));
    }
    const addArtistHandler = () => {
        history.push("/addartist");
        setClicked(prevState => (!prevState));
    }

    return (
        < div className="d-flex flex-column col text-center white dDown" >
            <img src={Pic} alt="" className="segitiga" />
            {(action.dataLogin[0].role === 2) ? (
                <div onClick={payHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                    <span>Pay</span>
                </div>
            ) : (<>
                <div onClick={addMusicHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                    <span>Add Music</span>
                </div>
                <div onClick={addArtistHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                    <span>Add Artist</span>
                </div></>)}
            <div className="dropdown-divider" />
            <div onClick={outHandler} className="d-flex justify-content-center align-items-center DownItem pointer">
                <span>Logout</span>
            </div>
        </div >
    )
}

export default Actions(DropDown);
