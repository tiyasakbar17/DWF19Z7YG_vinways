import React from 'react'
import { Col, Form } from 'reactstrap'
import ReactDOM from 'react-dom'
import Actions from '../../Context/Actions'

function Payment({ action }) {

    const [state, setState] = React.useState({
        accNumber: '',
        file: 'Attach proof of transfer',
    })

    const changeHandler = (e) => {
        setState(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const fileHandler = e => {
        setState(prevState => ({
            ...prevState, file: e.target.files[0] ? e.target.files[0].name : "Attach proof of transfer"
        }))
    }

    const clickHandler = () => {
        // CLOSE PAYMENT
        action.PAYMENT()
    }

    const submitHandler = e => {
        e.preventDefault()
        window.alert("UPLOAD SUCCESS")
        action.PAYMENT()
    }

    const textInput = React.createRef();

    const focusTextInput = () => { textInput.current.click() }

    return ReactDOM.createPortal(
        <div className="Payment">
            <span onClick={() => clickHandler()} className="closer">X</span>
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
                                <input type="text" className="input tembus white" name="accNumber" placeholder="Input your account number" value={state.accNumber} onChange={changeHandler} />
                                <input onClick={focusTextInput} type="text" className="input Upload green" readOnly value={state.file} />
                                <input type="file" onChange={fileHandler} ref={textInput} className="input fileUpload" />
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


export default Actions(Payment);
