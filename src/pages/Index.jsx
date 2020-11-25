import React from 'react'
import { Redirect } from 'react-router-dom';
import CardSong from '../components/CardSong';
import userPict from '../img/1579183327044.png';
import { Row } from 'reactstrap';
import ImageSlider from '../components/ImageSlider';
import Payment from '../components/Payment';

function Index(props) {

    const clickHandler = ()=> {
        if (props.data.loginData.payed === false){
            props.setData(prevState => ({
                ...prevState,
                paymentComp: true
            }))
        }
        else {
            window.alert("kena deh")
        }
    }

    return (
        <>
            {props.data.paymentComp===true ? (<Payment close={props.setData} /> ):""}
            {props.data.isLogin === false ? (<Redirect to={{ pathname: "/login" }} />) : ""}
            <div className="headerLogin">
                <img src={userPict} alt="foto" className="userPict" />
            </div>
            <div>
                <Row>
                    <div className="showBox">
                        <ImageSlider imgs={props.data.thumbnails} />
                    </div>
                </Row>
                <Row>
                    <div className="songList">
                        {props.data.songs.map(song => {
                            return (
                                    <div onClick={clickHandler} className="cardMe" key={song.id}>
                                        <CardSong state={{ title: song.title, singer: song.singer, year: song.year, img: song.img }} />
                                    </div>
                            )
                        })}
                    </div>
                </Row>
            </div>
        </>
    )
}

export default React.memo(Index)
