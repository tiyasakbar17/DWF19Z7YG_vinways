import React from 'react'
import { Route } from "react-router-dom";
import { AppContext } from '../Context/AppContext';
import Login from '../pages/Login';

const LoginRoute = ({ component: Component, ...rest }) => {

    // Cek Login
    const [globalState] = React.useContext(AppContext);

    return (
        <Route
            {...rest}
            component={globalState.isLogin ? Component : Login}
        // render={props => {
        //     globalState.isLogin ? <Component {...props} /> : <Redirect to="/login" />
        // }}
        />
    );
}

export default LoginRoute;