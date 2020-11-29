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
        <H5AudioPlayer
            {...options}
            onEnded={action.CLOSEMUSIC()}
        >

        </H5AudioPlayer>,
        document.getElementById('portal-root')
    )
}

export default Actions(MusicPlayer);
