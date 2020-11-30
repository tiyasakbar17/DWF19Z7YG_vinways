import React from 'react'
import { AppContext } from './AppContext'

const Actions = (WrappedComponent) => {
    function Content(props) {
        const [globalState, dispatch] = React.useContext(AppContext);
        const Action = {
            dataLogin: globalState.tempData.userLogin ? (globalState.users.filter(user => user.id_u === globalState.tempData.userLogin)) : [],
            transactions: () => {
                const transaksi = []
                globalState.users.map(user => user.buktiBayar.filter(bukti => transaksi.push({ id_u: user.id_u, name: user.name, activeDay: user.activeDay, bukti: bukti })))
                return transaksi;
            },
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
            POPUP: (payload) => {
                dispatch({
                    type: "POP_UP",
                    payload: payload
                })
            },
            MUSICPLAYER: (payload) => {
                dispatch({
                    type: "MUSIC_PLAYER",
                    payload: payload
                })
            },
            CLOSEMUSIC: () => {
                dispatch({
                    type: "CLOSE_MUSIC"
                })
            },
            REGISTER: (payload) => {
                dispatch({
                    type: "REGISTER",
                    payload: payload
                })
            },
            UPLOADPAYMENT: (payload) => {
                dispatch({
                    type: "UPLOAD_PAYMENT",
                    payload: {
                        id_u: payload.id_u,
                        img: payload.img
                    }
                })
            },
            APPROVEPAYMENT: (payload) => {
                dispatch({
                    type: "APPROVE_PAYMENT",
                    payload: {
                        id_u: payload.id_u,
                        id_b: payload.id_b
                    }
                })
            },
            CANCELPAYMENT: (payload) => {
                dispatch({
                    type: "CANCEL_PAYMENT",
                    payload: {
                        id_u: payload.id_u,
                        id_b: payload.id_b
                    }
                })
            },
            ADDARTIST: (payload) => {
                dispatch({
                    type: "ADD_ARTIST",
                    payload: payload
                })
            },
            ADDMUSIC: (payload) => {
                dispatch({
                    type: "ADD_MUSIC",
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
