import React from 'react'
import { Redirect } from 'react-router-dom';
import CardSong from '../components/CardSong';
import userPict from '../img/1579183327044.png';
import { Row } from 'reactstrap';
import { Carousel } from '3d-react-carousal';

function Index(props) {

    const thumbnailImages = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />
    ]

    return (
        <>
            {props.data.isLogin === false ? (<Redirect to={{ pathname: "/login" }} />) : ""}
            <div className="headerLogin">
                <img src={userPict} alt="foto" className="userPict" />
            </div>
            <div className="konten">
                <Row>
                    <div className="showBox">
                        <Carousel slides={thumbnailImages} autoplay={true} interval={1000} />
                    </div>
                </Row>
                <Row>
                    <div className="songList">
                        {props.data.songs.map(song => {
                            return (
                                <div className="cardMe" key={song.id}>
                                    <CardSong state={{ title: song.title, singer: song.singer, year: song.year }} />
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
