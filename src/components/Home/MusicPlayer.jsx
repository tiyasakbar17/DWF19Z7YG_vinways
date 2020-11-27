import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import ReactDOM from 'react-dom'

function MusicPlayer({ song }, props) {

    console.log(props);

    return ReactDOM.createPortal(
        <div className="musicPlayer">
            <ReactJkMusicPlayer mode="full" theme="dark" icon={song.img} showDownload="false" audioLists={[{ src: song.audio }]} >

            </ReactJkMusicPlayer>

        </div>,
        document.getElementById('portal-root')
    )
}

export default MusicPlayer
