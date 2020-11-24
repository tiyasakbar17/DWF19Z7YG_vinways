import React from 'react'
import { connect } from 'react-redux';
import CardSong from '../components/CardSong';
import userPict from '../img/1579183327044.png'

function Index(props) {

    return (
        <>
            <div className="headerLogin">
                <img src={userPict} alt="foto" className="userPict" />
            </div>
            <div className="konten">
                <div className="showBox">

                </div>
                <div className="songList">
                    {props.songs.map(song => {
                        return (
                            <div className="card" key={song.id}>
                                <CardSong state={{ title: song.title, singer: song.singer, year: song.year }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    console.log(state);
    return {
        songs: state.getSong.songs
    }
}


export default connect(mapStateToProps)(Index)
