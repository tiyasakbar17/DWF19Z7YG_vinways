import React from 'react'

function AddArtist() {
    const [state, setState] = React.useState({
        name: '',
        old: '',
        career: '',
        start: ''
    })

    const changeHandler = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(state);
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
                        <input type="text" name="name" value={state.name} onChange={(e) => changeHandler(e)} placeholder="Title" className="form-control tembus col-8 white" />
                        <button onClick={focusTextInput} className="form-control tembus col-4 text-white" >Attach Thumbnail</button>
                        <input type="file" ref={textInput} className="fileUpload" />
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

export default AddArtist
