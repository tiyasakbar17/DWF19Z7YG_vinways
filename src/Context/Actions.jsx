import React from 'react'
import { AppContext } from './AppContext'

const Actions = (WrappedComponent) => {
    function Content(props) {
        const [globalState, dispatch] = React.useContext(AppContext);
        const Action = {
            LOGIN: (payload) => {
                dispatch({
                    type: "LOGIN",
                    payload: payload
                })
            }
        }
        return (
            <WrappedComponent action={Action} {...props} />
        )
    }
    return Content;

}

export default Actions;
