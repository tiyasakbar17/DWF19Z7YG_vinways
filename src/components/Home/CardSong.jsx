import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { likeAct } from '../../Redux/Actions/MusicActions';

function CardSong(props) {
    const history = useHistory()
    const { onClick, state: { img, title, year, singer, artistId, like, songId }, Auth, likeAct } = props;
    const clickHandler = (id) => {
        history.push(`/artist/${id}`)
    }
    const likeHandler = () => {
        likeAct(songId)
    }
    return (
        <>
            <div className="imgContainer" onClick={onClick}>
                <img className="CardIMG" src={img} alt="thumbnail" />
                <div className="overlay">
                    <div className="overlayText"><strong>Play Now</strong></div>
                </div>
            </div>
            <div className="d-flex flex-column flex-fill align-self-stretch mt-1">
                <div className="d-flex flex-column">
                    <div className="d-flex" style={{ fontSize: "20px" }}>
                        <i className={`fas fa-thumbs-up ml-1 pointer ${like.find(elemen => elemen.userId === Auth.userData.id) ? "red" : "text-white"}`} onClick={likeHandler} ></i><span className="text-muted tahun ml-1">liked by {like.length} people</span>
                    </div>
                    <div className="d-flex justify-content-between align-content-stretch align-items-start">
                        <span className="white h5">{title}</span>
                        <span className="text-muted tahun"> {year} </span>
                    </div>
                </div>
            </div>
            <div className="h6 green">
                <span className="bigClose" onClick={() => clickHandler(artistId)}>{singer}</span>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    Auth: state.Auth
})

const mapDispatchToProps = {
    likeAct
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSong);
