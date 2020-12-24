import React from 'react'
import { Col, Form } from 'reactstrap'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { showPayment, popUp } from '../../Redux/Actions/PopUpActions'
import { uploadTransaction } from '../../Redux/Actions/TransactionActions'

function Payment({ showPayment, popUp, uploadTransaction }) {

    const [state, setState] = React.useState({
        bankAccountNumber: '',
        file: 'Attach proof of transfer',
        thumbnail: null,
        preview: ''
    })

    const changeHandler = (e) => {
        setState(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const fileHandler = e => {
        setState(prevState => ({
            ...prevState,
            file: e.target.files[0] ? e.target.files[0].name : 'Attach proof of transfer',
            preview: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '',
            thumbnail: e.target.files[0] ? e.target.files[0] : null
        }))
    }

    const clickHandler = () => {
        // CLOSE PAYMENT
        showPayment()
    }

    const submitHandler = e => {
        e.preventDefault()
        if (state.bankAccountNumber && state.file !== 'Attach proof of transfer') {
            const formData = new FormData();
            formData.append("thumbnail", state.thumbnail);
            formData.append("bankAccountNumber", Number(state.bankAccountNumber))
            uploadTransaction(formData)
            showPayment()
        }
        else {
            popUp("Please fill all of the inputs")
        }
    }

    const textInput = React.createRef();

    const focusTextInput = () => { textInput.current.click() }

    return ReactDOM.createPortal(
        <div className="Payment">
            <span onClick={() => clickHandler()} className="closer"><i className="fas fa-times"></i></span>
            <div className="holder">
                <Col>
                    <Col>
                        <span className="regis green">Premium</span>
                        <p className="white" >Bayar sekarang dan nikmati streaming musik yang kekinian dari <strong> Co <span className="green">Ways</span></strong></p>
                        <p className="white" ><strong> Co <span className="green">Ways</span> : 081284914453</strong></p>
                    </Col>
                    <Col>
                        <div className="ReLog middle">
                            <Form onSubmit={submitHandler} >
                                <input type="text" className="input tembus white" name="bankAccountNumber" placeholder="Bank account number" value={state.bankAccountNumber} onChange={changeHandler} />
                                <input onClick={focusTextInput} type="text" className="input Upload green" readOnly value={state.file} />
                                <input type="file" name="thumbnail" onChange={fileHandler} ref={textInput} className="input fileUpload" />
                                <div className="row d-flex justify-content-center mb-2">
                                    {state.file !== 'Attach proof of transfer' ? <img src={state.preview} alt="Thumbnail" className="img-thumbnail img-fluid showThumbnail" /> : ""}
                                </div>
                                <button className="input button">Submit</button>
                            </Form>
                        </div>
                    </Col>
                </Col>
            </div>
        </div>,
        document.getElementById('portal-root')
    )
}


export default connect(null, { showPayment, popUp, uploadTransaction })(Payment);
