import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Vector.png'
import userPict from '../img/1579183327044.png';
import DropDown from './DropDown';


function Header(props) {

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
            <div className="col d-flex headerCustom align-items-xl-center" style={props.data.isLogin ? {} : style.bgClr}>
                <div className="col text-left ">
                    <div className="webLogo mt-2">
                        <Link to="/login" >
                            <div className="d-flex align-items-center">
                                <p className="white">C</p>
                                <img className="logo align-self-center" src={logo} alt="logo" />
                                <p className="green">Ways</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col text-right">
                    <div className="userAccount mt-2">
                        <img src={userPict} alt="foto" className="userPict" onClick={clickHandler} style={props.data.isLogin ? {} : style.cnt} />
                    </div>
                </div>
            </div>
            {clicked ? <DropDown setData={props.setData} setClicked={setClicked} /> : ""}
        </>
    )
}

export default Header
