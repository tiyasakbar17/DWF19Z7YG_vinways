import React from 'react'

function CardSong(props) {
    return (
        <>
            <div className="imgContainer">
                <img className="CardIMG" src={props.state.img} alt="thumbnail" />
                <div className="overlay">
                    <div className="overlayText"><strong>Play Now</strong></div>
                </div>
            </div>
            <div className="d-flex flex-column flex-fill align-self-stretch">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-content-stretch align-items-start">
                        <span className="white h5 mt-3">{props.state.title}</span>
                        <span className="text-muted tahun mt-3"> {props.state.year} </span>
                    </div>
                </div>
            </div>
            <div className="h6 green">
                <span>{props.state.singer}</span>
            </div>
        </>
    )
}

export default React.memo(CardSong);
