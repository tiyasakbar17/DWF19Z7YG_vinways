import React from 'react'
import Jargon from '../components/Jargon'
import { Link } from 'react-router-dom'
import { Form, FormGroup } from 'reactstrap'

function Register(props) {

    const inntialValue = {
        email:'',
        password: '',
        name: ''
    }

    const [state, setState] = React.useState(inntialValue)

    const submitHandler = (e)=> {
        e.preventDefault()
        let id = props.data.users.length
        let dataBaru = {
            id: id + 1,
            email: state.email,
            password: state.password,
            name: state.name
        }
        props.setData(prevState => ({...prevState, users:[...prevState.users, dataBaru]}))
        setState(inntialValue)
    }

    const changeHandler = (e)=> {
        setState((prevState)=> ({...prevState, [e.target.name]:e.target.value}))
    }

    return (
        <div className="content">
            <div className="pembagi">
                <div className="awal">
                    <Jargon />
                    <Link to={{pathname:"/login"}}><button className="button"> Login</button></Link>
                </div>
                <div className="ReLog">
                    <h1 className="regis green">Register</h1>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <input className="input tembus" type="text" name="email" value={state.email} placeholder="Email" onChange={(e)=>changeHandler(e)} />
                            <input className="input tembus" type="password" name="password" value={state.password} placeholder="Password"  onChange={(e)=>changeHandler(e)} />
                            <input className="input tembus" type="text" name="name" placeholder="Full Name" value={state.name}   onChange={(e)=>changeHandler(e)} />
                            <button className="input button" type="submit" onChange={(e)=>changeHandler(e)}>Register</button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Register)
