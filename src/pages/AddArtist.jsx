import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addArtist } from '../Redux/Actions/MusicActions'

function AddArtist({ Musics, addArtist }) {

    const history = useHistory();

    const innitialValue = {
        name: '',
        old: '',
        career: '',
        start: '',
        img: 'Attach Thumbnail',
        thumbnail: null,
        preview: ''
    }
    const [state, setState] = React.useState(innitialValue)

    const changeHandler = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const fileHandler = e => {
        setState(prevState => ({
            ...prevState,
            img: e.target.files[0] ? e.target.files[0].name : 'Attach Thumbnail',
            preview: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '',
            thumbnail: e.target.files[0] ? e.target.files[0] : null
        }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", state.name);
        formData.append("old", Number(state.old));
        formData.append("category", state.career);
        formData.append("startCareer", state.start);
        formData.append("thumbnail", state.thumbnail);
        addArtist(formData);
        setState({ ...innitialValue })
    }

    const textInput = React.createRef();
    const focusTextInput = () => { textInput.current.click() }

    if (Musics.push) {
        history.push("/")
    }
    let startYear = 1960;
    let endYear = new Date().getFullYear();
    const yearLists = []
    for (let i = endYear; i > startYear; i--) {
        yearLists.push(i)
    }

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
                        <input type="file" name="thumbnail" onChange={fileHandler} ref={textInput} className="fileUpload" />
                    </div>
                    <div className="row">
                        <div className={state.img !== 'Attach Thumbnail' ? "col-9 mr-4" : "col"}>
                            <div className="row mb-4">
                                <input type="text" value={state.old} onChange={(e) => changeHandler(e)} placeholder="Old" name="old" className="form-control tembus white" />
                            </div>
                            <div className="row mb-4">
                                <select className="custom-select tembus white" name="career" onChange={(e) => changeHandler(e)}>
                                    <option className="text-dark">Career as</option>
                                    <option className="text-dark" value="Solo">Solo</option>
                                    <option className="text-dark" value="Rapper">Rapper</option>
                                    <option className="text-dark" value="Band">Band</option>
                                    <option className="text-dark" value="Group Band">Group Band</option>
                                </select>
                            </div>
                            <div className="row">
                                {/* <input type="date" name="start" onChange={(e) => changeHandler(e)} className="col form-group form-control tembus white" value={state.start} placeholder="Start a career" /> */}
                                <select name="start" onChange={(e) => changeHandler(e)} className="custom-select tembus white mb-5">
                                    <option className="text-dark">Start Career</option>
                                    {
                                        yearLists ? yearLists.map((year, i) => {
                                            i += 1;
                                            return (<option className="text-dark" value={year} key={i + 1} >{year}</option>)
                                        }) : ""
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={state.img !== 'Attach Thumbnail' ? "col-2" : ""}>
                            <div className="row mb-4 d-flex justify-content-end" style={state.img !== 'Attach Thumbnail' ? { width: "250px" } : {}}>
                                {state.img !== 'Attach Thumbnail' ? <img src={state.preview} alt="Thumbnail" className="img-thumbnail img-fluid showThumbnail" /> : ""}
                            </div>
                        </div>
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

const mapStateToProps = (state) => ({
    Musics: state.Musics
})


export default connect(mapStateToProps, { addArtist })(AddArtist);

