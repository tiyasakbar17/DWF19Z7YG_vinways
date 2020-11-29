import React from 'react'
import CardSong from '../components/Home/CardSong';
import { Row } from 'reactstrap';
import ImageSlider from '../components/Home/ImageSlider';
import MusicPlayer from '../components/Home/MusicPlayer';
import { AppContext } from '../Context/AppContext'
import Actions from '../Context/Actions';

function Index({ action: Action }) {

    const [globalState] = React.useContext(AppContext)

    console.log(globalState);

    const clickHandler = (song) => {

        if (Action.dataLogin[0].activeDay === 0) {
            //SHOW PAYMENT
            Action.PAYMENT()
        }
        else {
            // SHOW MUSIC PLAYER
            Action.MUSICPLAYER(song.audio)
        }
    }

    return (
        <>
            {globalState.tempData.playerComp === true ? (<MusicPlayer song={globalState.tempData.musicToPlay} />) : ""}
            <div>
                <Row>
                    <div className="showBox">
                        <ImageSlider imgs={globalState.thumbnails} />
                    </div>
                </Row>
                <Row>
                    <div className="d-flex flex-wrap justify-content-around songList">
                        {
                            globalState.artists.map(artist => artist.songs.map((song, i) => {
                                i += 1;
                                return (
                                    <div onClick={() => clickHandler(song)} className="cardMe" key={i + 1}>
                                        <CardSong state={{ title: song.title, singer: artist.name, year: song.year, img: song.img }} />
                                    </div>
                                )
                            }))
                        }
                    </div>
                </Row>
            </div>
        </>
    )
}

export default Actions(Index);
