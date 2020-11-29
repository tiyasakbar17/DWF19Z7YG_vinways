import React from 'react'
import Actions from '../Context/Actions'
import { AppContext } from '../Context/AppContext'

function AddArtist({ action }) {

    const [globalState] = React.useContext(AppContext);
    const innitialValue = {
        name: '',
        old: '',
        career: '',
        start: '',
        img: 'Attach Thumbnail',

    }
    const [state, setState] = React.useState(innitialValue)

    const changeHandler = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const fileHandler = e => {
        setState(prevState => ({
            ...prevState, img: e.target.files[0] ? e.target.files[0].name : 'Attach Thumbnail'
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const id = globalState.artists.length
        const data = {
            id_a: id + 1,
            name: state.name,
            img: state.img,
            start: Number(state.start),
            age: Number(state.old),
            career: state.career,
            songs: []
        }
        action.ADDARTIST(data)
        action.POPUP({ message: "An Artist Added Successfully" })
        setState(innitialValue)
    }

    const textInput = React.createRef();
    const focusTextInput = () => { textInput.current.click() }

    return (
        <div className="kontens">
            <div className="container formAdd">
                <div className="row">
                    <h1 className="green mt-5 mb-5">
                        Add Artist
                    </h1>
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="row mb-4">
                        <input type="text" name="name" value={state.name} onChange={(e) => changeHandler(e)} placeholder="Name" className="form-control tembus col-8 white" />
                        <button type="button" onClick={focusTextInput} className="btn form-control pointer tembus col-4 text-white" >{state.img}</button>
                        <input type="file" onChange={fileHandler} ref={textInput} className="fileUpload" />
                    </div>
                    <div className="row mb-4">
                        <input type="text" value={state.old} onChange={(e) => changeHandler(e)} placeholder="Old" name="old" className="form-control tembus white" />
                    </div>
                    <div className="row mb-4">
                        <select className="custom-select tembus white" name="career" onChange={(e) => changeHandler(e)}>
                            <option className="text-dark">Career as</option>
                            <option className="text-dark" value="Solo">Solo</option>
                            <option className="text-dark" value="Group">Group</option>
                        </select>
                    </div>
                    <div className="row">
                        <input type="text" name="start" onChange={(e) => changeHandler(e)} className="col form-group form-control tembus white" value={state.start} placeholder="Start a career" />
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <button type="submit" className="btn btn-success text-dark submitButton">Add Artist</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Actions(AddArtist);
