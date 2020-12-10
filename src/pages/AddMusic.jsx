import React from 'react'
import { connect } from 'react-redux';
import { addMusic } from '../Redux/Actions/MusicActions';

function AddMusic({ Musics, addMusic }) {

    const innitialValue = {
        title: '',
        year: '',
        singer: '',
        img: 'Attach Thumbnail',
        audio: 'Attach',
        thumbnail: null,
        attachment: null,
        preview: ''
    }

    const [state, setState] = React.useState(innitialValue);
    console.log(state);

    const changeHandler = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const fileHandler = (e) => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: (e.target.files[0]) ? (e.target.files[0].name) : (e.target.name === 'img' ? 'Attach Thumbnail' : 'Attach'),
            [e.target.name === 'img' ? 'thumbnail' : 'attachment']: e.target.files[0],
            preview: e.target.name === 'img' ? URL.createObjectURL(e.target.files[0]) : state.preview
        }))


    }
    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("artistId", Number(state.singer))
        formData.append("title", state.title)
        formData.append("year", Number(state.year))
        formData.append("thumbnail", state.thumbnail)
        formData.append("attachment", state.attachment)
        addMusic(formData);
        setState(innitialValue)
    }

    const textInput = React.createRef();
    const focusTextInput = () => { textInput.current.click() }
    const textInput2 = React.createRef();
    const focusTextInput2 = () => { textInput2.current.click() }

    return (
        <div className="kontens">
            <div className="container formAdd">
                <div className="row">
                    <h1 className="green mt-5 mb-5">
                        Add Music
                    </h1>
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="row mb-4">
                        <input type="text" name="title" value={state.title} onChange={(e) => changeHandler(e)} placeholder="Title" className="form-control tembus col-8 white" />
                        <button type="button" onClick={focusTextInput} className="form-control tembus col-4 text-white" > {state.img} </button>
                        <input name="img" type="file" onChange={(e) => fileHandler(e)} ref={textInput} className="fileUpload" />
                    </div>
                    <div className="row">
                        <div className={state.img !== 'Attach Thumbnail' ? "col-9 mr-4" : "col"}>
                            <div className="row mb-4">
                                <input type="text" value={state.year} onChange={(e) => changeHandler(e)} placeholder="Year" name="year" className="form-control tembus white" />
                            </div>
                            <div className="row mb-4">
                                <select className="custom-select tembus white" name="singer" onChange={(e) => changeHandler(e)}>
                                    <option className="text-dark">Singer</option>
                                    {Musics.artists.map(artist => (
                                        <option className="text-dark" value={artist.id} key={artist.id}>{artist.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <button type="button" onClick={focusTextInput2} className="col form-group form-control tembus text-center text-white" >{state.audio}</button>
                                    <input name="audio" type="file" onChange={(e) => fileHandler(e)} ref={textInput2} className="fileUpload" />
                                </div>
                            </div>
                        </div>
                        <div className={state.img !== 'Attach Thumbnail' ? "col-2" : ""}>
                            <div className="row d-flex justify-content-start">
                                {state.img !== 'Attach Thumbnail' ? <img src={state.preview} alt="Thumbnail" className="img-thumbnail img-fluid showThumbnail" /> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <button type="submit" className="btn btn-success text-dark submitButton">Add Music</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Musics: state.Musics
    }
}

export default connect(mapStateToProps, { addMusic })(AddMusic);
