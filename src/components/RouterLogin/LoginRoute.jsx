import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const LoginRoute = ({ component: Component, Auth, role, ...rest }) => {

    if (Auth.loading) {
        return (
            <div></div>
        )
    } else {
        return (
            <Route
                {...rest}
                render={props =>
                    (Auth.isLogin && (Auth.userData.role === role || Auth.userData.role === 1) ? <Component {...props} /> : <Redirect to="/login" />)
                }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps)(LoginRoute);