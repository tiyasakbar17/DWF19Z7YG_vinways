import React from 'react'
import ReactDOM from 'react-dom'
import H5AudioPlayer from 'react-h5-audio-player'
import Actions from '../../Context/Actions'

function MusicPlayer({ action, song }) {

    const options = {
        autoPlay: true,
        src: `/song/${song}`
    }

    return ReactDOM.createPortal(
        <div className="musicPlayer">
            <H5AudioPlayer
                {...options}
                onEnded={() => action.CLOSEMUSIC()}
                style={{ backgroundColor: "#363954" }}
            >

            </H5AudioPlayer>
        </div>,
        document.getElementById('portal-root')
    )
}

export default Actions(MusicPlayer);
