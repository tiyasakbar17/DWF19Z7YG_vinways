import React from 'react'
import ReactDOM from 'react-dom'
import H5AudioPlayer from 'react-h5-audio-player'
import { connect } from 'react-redux'
import { closePlayer } from '../../Redux/Actions/PopUpActions'

function MusicPlayer({ PopUpState, closePlayer }) {

    const options = {
        autoPlay: true,
        src: `${PopUpState.musicToPlay.audio}`
    }

    return ReactDOM.createPortal(
        <div className="musicPlayer">
            <div className="col-2 d-flex justify-content-center align-items-center rotating">
                <div className="" style={{ borderRadius: "50%", width: "80px", height: "80px", overflow: "hidden" }}>
                    <img className="CardIMG" src={PopUpState.musicToPlay.img} alt="player" />
                </div>
            </div>
            <div className="col-8"><H5AudioPlayer
                {...options}
                onEnded={() => closePlayer()}
                style={{ backgroundColor: "#363954" }}
            ></H5AudioPlayer>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center pointer">
                <i onClick={() => closePlayer()} class="fas fa-times fa-3x white"></i>
            </div>
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
