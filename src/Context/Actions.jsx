import React from 'react'
import { AppContext } from './AppContext'

const Actions = (WrappedComponent) => {
    function Content(props) {
        const [globalState, dispatch] = React.useContext(AppContext);
        const Action = {
            dataLogin: globalState.tempData.userLogin ? (globalState.users.filter(user => user.id_u === globalState.tempData.userLogin)) : [],
            LOGIN: (payload) => {
                dispatch({
                    type: "LOGIN",
                    payload: payload
                })
            },
            LOGOUT: () => {
                dispatch({
                    type: "LOGOUT"
                })
            },
            PAYMENT: () => {
                dispatch({
                    type: "PAYMENT"
                })
            },
            MUSICPLAYER: (payload) => {
                dispatch({
                    type: "MUSIC_PLAYER",
                    payload: payload
                })
            },
            REGISTER: (payload) => {
                dispatch({
                    type: "REGISTER",
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
