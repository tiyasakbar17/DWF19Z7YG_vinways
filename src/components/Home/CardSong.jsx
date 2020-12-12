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
            <div className="">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-content-center align-items-center">
                        <span className="white h5 mt-3">{props.state.title}</span>
                        <span className="text-muted tahun"> {props.state.year} </span>
                    </div>
                    <div className="h6 green">
                        <span>{props.state.singer}</span>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex align-items-center">
                <img className="CardIMG" src={`http://localhost:3001/uploads/img/${props.state.img}`} alt="thumbnail" />
            </div> */}

            {/* <div className="card-body">
                <div className="d-flex justify-content-between align-items-center fieldflex">
                    <span className="white px18 pb-3">{props.state.title}</span>
                    <span className="text-muted tahun"> {props.state.year} </span>
                </div>
                <CardSubtitle tag="h6" className="mb-2 green">{props.state.singer}</CardSubtitle>
            </div> */}
        </>
    )
}

export default React.memo(CardSong);
