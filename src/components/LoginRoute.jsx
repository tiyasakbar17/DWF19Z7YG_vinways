import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const LoginRoute = ({ component: Component, Auth, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props =>
                (Auth.isLogin ? <Component {...props} /> : <Redirect to="login" />)
            }
        />
    );
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps)(LoginRoute);