import React from 'react'

function AddMusic() {

    const [state, setState] = React.useState({
        title: '',
        year: '',
        singer: ''
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
                        <button onClick={focusTextInput} className="form-control tembus col-4 text-white" >Attach Thumbnail</button>
                        <input type="file" ref={textInput} className="fileUpload" />
                    </div>
                    <div className="row mb-4">
                        <input type="text" value={state.year} onChange={(e) => changeHandler(e)} placeholder="Year" name="year" className="form-control tembus white" />
                    </div>
                    <div className="row mb-4">
                        <select className="custom-select tembus white" name="singer" onChange={(e) => changeHandler(e)}>
                            <option className="text-dark">Singer</option>
                            <option className="text-dark" value="Tiyas">Tiyas</option>
                            <option className="text-dark" value="Andre">Andre</option>
                            <option className="text-dark" value="Gasi">Gasi</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <button onClick={focusTextInput2} className="col form-group form-control tembus text-center text-white" >Attache</button>
                            <input type="file" ref={textInput2} className="fileUpload" />
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

export default AddMusic
