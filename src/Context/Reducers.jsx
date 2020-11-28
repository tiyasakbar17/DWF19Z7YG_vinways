const Reducers = (state, action) => {
    console.log("LOAD REDUCER");
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    isLogin: true,
                    userLogin: action.payload
                }
            }
        case "LOGOUT":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    isLogin: false,
                    userLogin: null,
                    playerComp: false
                },
            }
        case "REGISTER":
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
        case "PAYMENT":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    paymentComp: !state.tempData.paymentComp
                }
            }
        case "MUSIC_PLAYER":
            return {
                ...state,
                tempData: {
                    ...state.tempData,
                    playerComp: true,
                    musicToPlay: action.payload
                }
            }
        case "UPLOAD_PAYMENT":
            const userUpdate = state.users.findIndex(user => user.id_u === action.payload.id_u)
            const users = state.users
            const id = users[userUpdate].buktiBayar.length
            const updatedUsers = {
                ...users[userUpdate],
                buktiBayar: [...users[userUpdate].buktiBayar,
                { id_b: id + 1, img: action.payload.img, approved: null }
                ]
            }
            return {
                ...state,
                users: [...users.slice(0, userUpdate),
                    updatedUsers,
                ...users.slice(userUpdate + 1)
                ]
            }
        case "ADD_ARTIST":
            return {
                ...state,
                artists: [
                    ...state.artists,
                    action.payload
                ]
            }
        default:
            throw new Error()
    }
};

export default Reducers;