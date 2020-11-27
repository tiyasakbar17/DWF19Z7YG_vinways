import React from 'react'
import CardSong from '../components/Home/CardSong';
import { Row } from 'reactstrap';
import ImageSlider from '../components/Home/ImageSlider';
import Payment from '../components/Payment/Payment';
import MusicPlayer from '../components/Home/MusicPlayer';
import AppContext from '../Context/AppContext'

function Index() {

    const [globalState, dispatch] = React.useContext(AppContext)

    const clickHandler = (song) => {
        if (globalState.loginData.payed !== "approve") {
            //SHOW PAYMENT
            dispatch({
                type: "PAYMENT"
            })
        }
        else {
            // SHOW MUSIC PLAYER
            dispatch({
                type: "MUSIC_PLAYER",
                payload: song
            })
        }
    }

    return (
        <>
            {globalState.paymentComp === true ? (<Payment />) : ""}
            {globalState.playerComp === true ? (<MusicPlayer song={globalState.musicToPlay} />) : ""}
            <div>
                <Row>
                    <div className="showBox">
                        <ImageSlider imgs={globalState.thumbnails} />
                    </div>
                </Row>
                <Row>
                    <div className="songList">
                        {globalState.songs.map(song => {
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
