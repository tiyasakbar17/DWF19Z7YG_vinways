import React from 'react'
import CardSong from '../components/Home/CardSong';
import { Row } from 'reactstrap';
import ImageSlider from '../components/Home/ImageSlider';
import { connect } from 'react-redux';
import { loadArtists } from '../Redux/Actions/MusicActions'
import { showPayment, showPlayer } from '../Redux/Actions/PopUpActions'
import Loading from '../components/PopUps/Loading';
import New from '../components/Home/New';

function Index({ Auth, Musics, loadArtists, showPayment, showPlayer }) {
    const compare = (key) => {
        return (a, b) => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                console.log("udin");
                return 0;
            }
            let comparison = 0;
            if (a[key] > b[key]) {
                comparison = 1;
            }
            if (a[key] < b[key]) {
                comparison = -1;
            }
            return comparison * -1;
        };
    };

    const musicList = Musics.musics ? Musics.musics.sort(compare("createdAt")) : "";


    const clickHandler = (music, img) => {

        if (!Auth.userData.activeDay && Auth.userData.role === 2) {
            //SHOW PAYMENT
            showPayment()
        }
        else {
            // SHOW MUSIC PLAYER
            showPlayer(music, img)
        }
    }
    const load = () => loadArtists()
    React.useEffect(() => {
        load()
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
                        <div className="d-flex flex-wrap align-content-stretch justify-content-around songList">
                            {
                                Musics.musics ? musicList.map((music, i) => {
                                    const created = Date.now() - new Date(music.createdAt).getTime();
                                    i += 1;
                                    return (
                                        <div onClick={() => clickHandler(music.attachment, music.thumbnail)} className="cardMe d-flex flex-column align-content-stretch" key={i + 1}>
                                            <CardSong state={{ title: music.title, singer: music.artist.name, year: music.year, img: music.thumbnail }} />
                                            <div style={{ position: "absolute", top: "5px", right: "5px", width: "30px", height: "30px" }}>{created < (12 * 60 * 60 * 1000) ? <New /> : ""}</div>
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
