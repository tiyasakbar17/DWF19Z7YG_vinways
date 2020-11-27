import React from 'react'
import { Redirect } from 'react-router-dom';
import CardSong from '../components/Home/CardSong';
import { Row } from 'reactstrap';
import ImageSlider from '../components/Home/ImageSlider';
import Payment from '../components/Payment/Payment';
import MusicPlayer from '../components/Home/MusicPlayer';

function Index(props) {

    const clickHandler = (song) => {
        if (props.data.loginData.payed !== "approve") {
            props.setData(prevState => ({
                ...prevState,
                paymentComp: true
            }))
        }
        else {
            props.setData(prevState => ({
                ...prevState,
                playerComp: true,
                musicToPlay: song
            }))
        }
    }

    return (
        <>
            {props.data.paymentComp === true ? (<Payment close={props.setData} />) : ""}
            {props.data.playerComp === true ? (<MusicPlayer song={props.data.musicToPlay} />) : ""}
            {props.data.isLogin === false ? (<Redirect to={{ pathname: "/login" }} />) : ""}
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
                                <div onClick={(song) => clickHandler(song)} className="cardMe" key={song.id}>
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
