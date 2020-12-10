import React from 'react'
import ReactDOM from 'react-dom'
import H5AudioPlayer from 'react-h5-audio-player'
import { connect } from 'react-redux'
import { closePlayer } from '../../Redux/Actions/PopUpActions'

function MusicPlayer({ PopUpState, closePlayer }) {

    const options = {
        autoPlay: true,
        src: `http://localhost:3001/uploads/audio/${PopUpState.musicToPlay}`
    }

    return ReactDOM.createPortal(
        <div className="musicPlayer">
            <H5AudioPlayer
                {...options}
                onEnded={() => closePlayer()}
                style={{ backgroundColor: "#363954" }}
            >

            </H5AudioPlayer>
        </div>,
        document.getElementById('portal-root')
    )
}

const mapStateToProps = (state) => {
    return {
        PopUpState: state.PopUp
    }
}

export default connect(mapStateToProps, { closePlayer })(MusicPlayer);
