import React from 'react'
import Actions from '../Context/Actions'
import { AppContext } from '../Context/AppContext'

function AddMusic({ action }) {

    const [state, setState] = React.useState({
        title: '',
        year: '',
        singer: '',
        img: 'Attach Thumbnail',
        audio: 'Attach'
    });

    const [globalState] = React.useContext(AppContext);

    const changeHandler = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const fileHandler = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.files[0] ? e.target.files[0].name : e.target.name === 'img' ? 'Attach Thumbnail' : 'Attach' }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            id_a: Number(state.singer),
            title: state.title,
            year: Number(state.year),
            img: state.img,
            audio: state.audio
        }
        console.log(data);
        action.ADDMUSIC(data)
        window.alert("Music Added")
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
                    <div className="row mb-4">
                        <input type="text" value={state.year} onChange={(e) => changeHandler(e)} placeholder="Year" name="year" className="form-control tembus white" />
                    </div>
                    <div className="row mb-4">
                        <select className="custom-select tembus white" name="singer" onChange={(e) => changeHandler(e)}>
                            <option className="text-dark">Singer</option>
                            {globalState.artists.map(artist => (
                                <option className="text-dark" value={artist.id_a} key={artist.id_a}>{artist.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <button type="button" onClick={focusTextInput2} className="col form-group form-control tembus text-center text-white" >{state.audio}</button>
                            <input name="audio" type="file" onChange={(e) => fileHandler(e)} ref={textInput2} className="fileUpload" />
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

export default Actions(AddMusic);
