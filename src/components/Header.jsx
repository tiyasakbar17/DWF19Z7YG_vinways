import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Vector.png'
import DropDown from './DropDown';
import Payment from './Payment/Payment';
import PopUp from './PopUps/PopUp';
import MusicPlayer from './Home/MusicPlayer';
import { connect } from 'react-redux';
import ProgressBar from './PopUps/ProgressBar';
import Loading from './PopUps/Loading';
import UserProfile from './PopUps/UserProfile';


function Header({ PopUpState, Auth }) {

    const style = {
        bgClr: { backgroundColor: "rgba(255, 255, 255, 0)" },
        cnt: { opacity: '0' }
    }

    const [clicked, setClicked] = React.useState(false)

    const clickHandler = () => {
        setClicked(!clicked)
    }

    return (
        <>
            {PopUpState.userProfile ? <UserProfile /> : ""}
            {PopUpState.loadingComp ? <Loading /> : ""}
            {PopUpState.progress.isShown ? <ProgressBar /> : ""}
            {PopUpState.playerComp ? (<MusicPlayer />) : ""}
            {PopUpState.paymentComp ? (<Payment />) : ""}
            {PopUpState.isPoped ? (<PopUp />) : ""}
            <div className="col d-flex headerCustom align-items-xl-center" style={Auth.isLogin ? {} : style.bgClr}>
                <div className="col text-left ">
                    <div className="webLogo mt-2">
                        <Link to="/login" >
                            <div className="d-flex align-items-center">
                                <span className="white">C</span>
                                <img className="logo align-self-center" src={logo} alt="logo" />
                                <span className="green">Ways</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col text-right">
                    <div className="userAccount mt-2">
                        <img src={Auth.userData ? Auth.userData.avatar ? Auth.userData.avatar : "/Vector(2).png" : "/Vector(2).png"} alt="foto" className="userPict" onClick={clickHandler} style={Auth.isLogin ? {} : style.cnt} />
                    </div>
                </div>
            </div>
            {clicked ? <DropDown setClicked={setClicked} /> : ""}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        PopUpState: state.PopUp,
        Auth: state.Auth
    }
}

export default connect(mapStateToProps)(Header);
