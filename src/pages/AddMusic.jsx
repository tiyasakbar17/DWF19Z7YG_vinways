import React from 'react'

function AddMusic() {

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
                <div className="row mb-4">
                    <input type="text" placeholder="Title" className="form-control tembus col-8 white" />
                    <button onClick={focusTextInput} className="form-control tembus col-4 text-white" >Attach Thumbnail</button>
                    <input type="file" ref={textInput} className="fileUpload" />
                </div>
                <div className="row mb-4">
                    <input type="text" placeholder="Year" className="form-control tembus white" />
                </div>
                <div className="row mb-4">
                    <select class="custom-select tembus white">
                        <option className="text-dark" selected>Singer</option>
                        <option className="text-dark" value="1">Tiyas</option>
                        <option className="text-dark" value="2">Andre</option>
                        <option className="text-dark" value="3">Gasi</option>
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
                        <button className="btn btn-success text-dark submitButton">Add Music</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMusic
