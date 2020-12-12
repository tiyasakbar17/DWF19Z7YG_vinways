import React from 'react'
import CardSong from '../components/Home/CardSong';
import { Row } from 'reactstrap';
import ImageSlider from '../components/Home/ImageSlider';
import { connect } from 'react-redux';
import { loadArtists } from '../Redux/Actions/MusicActions'
import { showPayment, showPlayer } from '../Redux/Actions/PopUpActions'
import Loading from '../components/PopUps/Loading';

function Index({ Auth, Musics, loadArtists, showPayment, showPlayer }) {

    const clickHandler = (music) => {

        if (!Auth.userData.activeDay && Auth.userData.role === 2) {
            //SHOW PAYMENT
            showPayment()
        }
        else {
            // SHOW MUSIC PLAYER
            showPlayer(music)
        }
    }

    React.useEffect(() => {
        loadArtists()
    }, [])

    if (Musics.loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <>
                <div>
                    <Row>
                        <div className="showBox">
                            <ImageSlider imgs={Musics.thumbnails} />
                        </div>
                    </Row>
                    <Row>
                        <div className="d-flex flex-wrap justify-content-around songList">
                            {
                                Musics.musics ? Musics.musics.map((music, i) => {
                                    i += 1;
                                    return (
                                        <div onClick={() => clickHandler(music.attachment)} className="cardMe" key={i + 1}>
                                            <CardSong state={{ title: music.title, singer: music.artist.name, year: music.year, img: music.thumbnail }} />
                                        </div>
                                    )
                                }) : ""
                            }
                        </div>
                    </Row>
                </div>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        Musics: state.Musics,
        Auth: state.Auth
    }
}

export default connect(mapStateToProps, { loadArtists, showPayment, showPlayer })(Index);
