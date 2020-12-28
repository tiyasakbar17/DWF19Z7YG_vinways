import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardSong from '../components/Home/CardSong'
import New from '../components/Home/New'
import { loadArtist, loadArtists } from '../Redux/Actions/MusicActions'
import { showPayment, showPlayer } from '../Redux/Actions/PopUpActions'

function DetailArtist({ Musics, loadArtist, loadArtists, Auth, showPayment, showPlayer }) {
    const compare = (key) => {
        return (a, b) => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
            let comparison = 0;
            if (a[key] < b[key]) {
                comparison = 1;
            }
            if (a[key] > b[key]) {
                comparison = -1;
            }
            return comparison;
        };
    };
    const { id } = useParams()
    const innitialValue = {
        album: []
    }
    const [state, setState] = React.useState(innitialValue)

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

    const getAlbum = () => {
        return (
            !Musics.artist ? null :
                Musics.artist.songs.map(song => state.album.includes(song.genre) ? null : !song.genre ? null : setState(prevState => ({
                    album: [...prevState.album, song.genre]
                }))))
    }

    React.useEffect(() => {
        loadArtist(id)
        loadArtists()
    }, [id, Musics.musics])
    React.useEffect(() => {
        getAlbum()
    }, [Musics.artist])

    if (!Musics.artist) {
        return (
            <div></div>
        )
    }

    const { name, category, startCareer, old, thumbnail, songs } = Musics.artist;
    const totalSong = songs.length;

    return (
        <div className="detailArtistContainer">
            <div className="leftDetailArtist">
                <div className="artistDetails">
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", fontFamily: "serif" }}>
                        <span className="white f40">{name}</span>
                    </div>
                    <div className="d-flex itemCont" >
                        <div className="detailItem"><span className="green"> Category </span></div>
                        <div className="detailItem"><span className="white">: {category} </span></div>
                    </div>
                    <div className="d-flex itemCont" >
                        <div className="detailItem"><span className="green"> Career Start </span></div>
                        <div className="detailItem"><span className="white">: {startCareer} </span></div>
                    </div>
                    <div className="d-flex itemCont" >
                        <div className="detailItem"><span className="green"> Old </span></div>
                        <div className="detailItem"><span className="white">: {old} </span></div>
                    </div>
                    <div className="d-flex itemCont" >
                        <div className="detailItem"><span className="green"> Total Songs </span></div>
                        <div className="detailItem"><span className="white">: {totalSong} </span></div>
                    </div>
                </div>
            </div>
            <div className="rightDetailArtist">
                <div className="artistThumbnail">
                    <img src={thumbnail} className="CardIMG" />
                </div>
                <div className="songsCont">
                    {
                        songs.sort(compare("createdAt")).map((song, i) => {
                            const created = Date.now() - new Date(song.createdAt).getTime();
                            i += 1;
                            return (
                                <div className="cardMe d-flex flex-column align-content-stretch" key={i + 1} style={{ width: "23%" }}>
                                    <CardSong onClick={() => clickHandler(song.attachment, song.thumbnail)} state={{ title: song.title, singer: name, year: song.year, img: song.thumbnail, artistId: song.artistId, like: song.likedBy, songId: song.id }} />
                                    <div style={{ position: "absolute", top: "5px", right: "20px", width: "30px", height: "30px" }}>{created < (12 * 60 * 60 * 1000) ? <New /> : ""}</div>
                                </div>
                            )
                        })
                    }
                    <div></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    Musics: state.Musics,
    Auth: state.Auth
})

const mapDispatchToProps = {
    loadArtist,
    showPayment,
    showPlayer,
    loadArtists
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailArtist)
