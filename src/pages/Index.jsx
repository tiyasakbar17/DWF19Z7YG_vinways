import React from 'react'
import CardSong from '../components/Home/CardSong';
import { Row } from 'reactstrap';
import ImageSlider from '../components/Home/ImageSlider';
import { connect } from 'react-redux';
import { loadArtists, loadMusics } from '../Redux/Actions/MusicActions'
import { showPayment, showPlayer } from '../Redux/Actions/PopUpActions'
import Loading from '../components/PopUps/Loading';
import New from '../components/Home/New';

function Index({ Auth, Musics, loadArtists, loadMusics, showPayment, showPlayer }) {
    const [state, setstate] = React.useState({
        key: "createdAt",
        order: "dec"
    })
    const selectHandler = (e) => {
        setstate(prevstate => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }

    const compare = (key, order) => {
        return (a, b) => {
            let position = 0
            if (a[key] < b[key]) {
                position = 1
            }
            if (a[key] > b[key]) {
                position = -1
            }

            return order === "dec" ? position : (position * -1)
        }
    }

    const listMusic = Musics.musics ? Musics.musics.sort(compare(state.key, state.order)) : null;

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
    const load = () => {
        loadArtists()
        loadMusics()
    }
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
                    {/* <Row>
                        <div className="sorting d-flex">
                            <select name="key" value={state.key} onChange={selectHandler} className="selection">
                                <option value="createdAt">time uploaded</option>
                                <option value="year">year</option>
                                <option value="title">title</option>
                                <option value="likes">likes</option>
                                <option value="artistId">artist</option>
                            </select>
                            <select name="order" value={state.order} onChange={selectHandler} className="selection ml-3">
                                <option value="dec">descending</option>
                                <option value="asc">ascending</option>
                            </select>
                        </div>
                    </Row> */}
                    <Row>
                        <div className="d-flex flex-wrap align-content-stretch songList">
                            {
                                Musics.musics ? Musics.musics.map((music, i) => {
                                    const created = Date.now() - new Date(music.createdAt).getTime();
                                    i += 1;
                                    return (
                                        <div className="cardMe d-flex flex-column align-content-stretch" key={i + 1}>
                                            <CardSong onClick={() => clickHandler(music.attachment, music.thumbnail)} state={{ title: music.title, singer: music.artist.name, year: music.year, img: music.thumbnail, artistId: music.artistId, like: music.likedBy, songId: music.id }} />
                                            <div style={{ position: "absolute", top: "5px", right: "20px", width: "30px", height: "30px" }}>{created < (12 * 60 * 60 * 1000) ? <New /> : ""}</div>
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

export default connect(mapStateToProps, { loadMusics, showPayment, loadArtists, showPlayer })(Index);
