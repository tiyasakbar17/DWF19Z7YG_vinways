import React from 'react'
import Jargon from '../components/FrontPage/Jargon'
import { Link, Redirect } from 'react-router-dom'
import { Form, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import { registerUser } from '../Redux/Actions/AuthActions'
import Loading from '../components/PopUps/Loading'

function Register({ Auth, registerUser }) {
    const inntialValue = {
        email: '',
        password: '',
        fullName: ''
    }

    const [state, setState] = React.useState(inntialValue)

    const submitHandler = (e) => {
        e.preventDefault()
        let dataBaru = {
            email: state.email,
            password: state.password,
            fullName: state.fullName,
        }
        registerUser(dataBaru);
        setState(inntialValue)
    }

    const changeHandler = (e) => {
        setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    if (Auth.isLogin) {
        return <Redirect to="/" />
    }
    if (Auth.loading) {
        return (<Loading />)
    } else {
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
                                <input className="input tembus" type="text" name="fullName" placeholder="Full Name" value={state.fullName} onChange={(e) => changeHandler(e)} />
                                <button className="input button" type="submit" onChange={(e) => changeHandler(e)}>Register</button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps, { registerUser })(Register)
