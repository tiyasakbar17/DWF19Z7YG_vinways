import { Route, Redirect } from "react-router-dom";

function LoginRoute({ component: Component, ...rest }) {

    // Pasang use Context untuk cek isLogin
    const isLogin = true;

    return (
        <Route
            {...rest}
            render={(props) => {
                isLogin ? <Component {...props} /> : <Redirect to="/login" />
            }}
        />
    );
}

export default LoginRoute;
