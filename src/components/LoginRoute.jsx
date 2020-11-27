import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { AppContext } from '../Context/AppContext';

function LoginRoute({ component: Component, ...rest }) {

    // Cek Login
    const [globalState] = React.useContext(AppContext);

    return (
        <Route
            {...rest}
            render={(props) => {
                globalState.isLogin ? <Component {...props} /> : <Redirect to="/login" />
            }}
        />
    );
}

export default LoginRoute;