import React from 'react'
import { Redirect } from 'react-router-dom';
import CardSong from '../components/CardSong';
import userPict from '../img/1579183327044.png'

function Index(props) {
    console.log(props);

    return (
        <>
            {props.data.isLogin === false ? (<Redirect to={{pathname:"/login"}} /> ) : ""}
            <div className="headerLogin">
                <img src={userPict} alt="foto" className="userPict" />
            </div>
            <div className="konten">
                <div className="showBox">

                </div>
                <div className="songList">
                    {props.data.songs.map(song => {
                        return (
                            <div className="cardMe" key={song.id}>
                                <CardSong state={{ title: song.title, singer: song.singer, year: song.year }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default React.memo(Index)
