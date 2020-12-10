import React from 'react'
import Jargon from '../components/FrontPage/Jargon'
import { Link, Redirect } from 'react-router-dom'
import { Form, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import { userLogin } from '../Redux/Actions/AuthActions'

function Login({ Auth, userLogin }) {

    const inntialValue = {
        email: '',
        password: ''
    }

    const [state, setState] = React.useState(inntialValue)

    const submitHandler = (e) => {
        e.preventDefault()
        //LOGIN
        userLogin(state)

    }

    const changeHandler = (e) => {
        setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    if (Auth.isLogin) {
        return <Redirect to="/" />
    }

    return (
        <div className="content">
            <div className="pembagi">
                <div className="awal">
                    <Jargon />
                    <Link to={{ pathname: "/register" }}><button className="button"> Register</button></Link>
                </div>
                <div className="ReLog">
                    <h1 className="regis green">Login</h1>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <input className="input tembus" type="text" name="email" value={state.email} placeholder="Email" onChange={(e) => changeHandler(e)} />
                            <input className="input tembus" type="password" name="password" value={state.password} placeholder="Password" onChange={(e) => changeHandler(e)} />
                            <button className="input button" type="submit" onChange={(e) => changeHandler(e)}>Login</button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps, { userLogin })(Login);
