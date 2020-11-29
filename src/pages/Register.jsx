import React from 'react'
import Jargon from '../components/FrontPage/Jargon'
import { Link } from 'react-router-dom'
import { Form, FormGroup } from 'reactstrap'
import { AppContext } from '../Context/AppContext'
import Actions from '../Context/Actions'

function Register({ action }) {

    const [globalState] = React.useContext(AppContext)

    const inntialValue = {
        email: '',
        password: '',
        name: ''
    }

    const [state, setState] = React.useState(inntialValue)

    const submitHandler = (e) => {
        e.preventDefault()
        let id = globalState.users.length
        let dataBaru = {
            id: id + 1,
            email: state.email,
            password: state.password,
            name: state.name,
            favourite: [],
            role: 2,
            activeDay: 0,
            buktiBayar: []
        }
        // ADD USER
        const cekEmail = globalState.users.find(user => (user.email === state.email))
        if (cekEmail) {
            action.POPUP({ message: "Use Another Email" })
        }
        else {
            action.REGISTER(dataBaru)
            action.POPUP({ message: "Your Account Created Successfully" })
            setState(inntialValue)
        }
    }

    const changeHandler = (e) => {
        setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (
        <div className="content">
            <div className="pembagi">
                <div className="awal">
                    <Jargon />
                    <Link to={{ pathname: "/login" }}><button className="button"> Login</button></Link>
                </div>
                <div className="ReLog">
                    <h1 className="regis green">Register</h1>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <input className="input tembus" type="text" name="email" value={state.email} placeholder="Email" onChange={(e) => changeHandler(e)} />
                            <input className="input tembus" type="password" name="password" value={state.password} placeholder="Password" onChange={(e) => changeHandler(e)} />
                            <input className="input tembus" type="text" name="name" placeholder="Full Name" value={state.name} onChange={(e) => changeHandler(e)} />
                            <button className="input button" type="submit" onChange={(e) => changeHandler(e)}>Register</button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Actions(Register)
