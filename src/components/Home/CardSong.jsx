import React from 'react'

function CardSong(props) {
    const { onClick, state: { img, title, year, singer } } = props;
    return (
        <>
            <div className="imgContainer" onClick={onClick}>
                <img className="CardIMG" src={img} alt="thumbnail" />
                <div className="overlay">
                    <div className="overlayText"><strong>Play Now</strong></div>
                </div>
            </div>
            <div className="d-flex flex-column flex-fill align-self-stretch">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-content-stretch align-items-start">
                        <span className="white h5 mt-3">{title}</span>
                        <span className="text-muted tahun mt-3"> {year} </span>
                    </div>
                </div>
            </div>
            <div className="h6 green">
                <span>{singer}</span>
            </div>
        </>
    )
}

export default React.memo(CardSong);
