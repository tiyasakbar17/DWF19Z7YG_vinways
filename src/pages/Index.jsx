import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import CardSong from '../components/CardSong';
import userPict from '../img/1579183327044.png';
import { Row } from 'reactstrap';
import ImageSlider from '../components/ImageSlider';

function Index(props) {

    return (
        <>
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
                                <Link to={{pathname: "/register"}} key={song.id} >
                                    <div className="cardMe">
                                        <CardSong state={{ title: song.title, singer: song.singer, year: song.year, img: song.img }} />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </Row>
            </div>
        </>
    )
}

export default React.memo(Index)
