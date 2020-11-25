import React from 'react'
import Jargon from '../components/Jargon'
import { Link, Redirect } from 'react-router-dom'
import { Form, FormGroup } from 'reactstrap'

function Login(props) {

    const {data} = props


    const inntialValue = {
        email:'',
        password: '',
        name: ''
    }

    const [state, setState] = React.useState(inntialValue)

    const submitHandler = (e)=> {
        e.preventDefault()
        data.users.forEach(datas => {
            ((datas.email===state.email && datas.password===state.password) ? props.setData((prevState)=>({...prevState, isLogin:true, loginData:datas})) : window.alert("Salah Email Atau Password") )
        });
    }

    const changeHandler = (e)=> {
        setState((prevState)=> ({...prevState, [e.target.name]:e.target.value}))
    }

    return (
        <div className="content">
            {data.isLogin && <Redirect to={{pathname:"/"}} />}
            <div className="pembagi">
                <div className="awal">
                    <Jargon />
                    <Link to={{pathname:"/register"}}><button className="button"> Register</button></Link>
                </div>
                <div className="ReLog">
                    <h1 className="regis green">Login</h1>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <input className="input tembus" type="text" name="email" value={state.email} placeholder="Email" onChange={(e)=>changeHandler(e)} />
                            <input className="input tembus" type="password" name="password" value={state.password} placeholder="Password"  onChange={(e)=>changeHandler(e)} />
                            <button className="input button" type="submit" onChange={(e)=>changeHandler(e)}>Login</button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Login)
