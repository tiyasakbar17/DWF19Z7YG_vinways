const Reducers = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: true,
                loginData: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                loginData: {},
                isLogin: false
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
                paymentComp: !state.paymentComp
            }
        case "MUSIC_PLAYER":
            return {
                ...state,
                playerComp: true,
                musicToPlay: action.payload
            }
        default:
            throw new Error()
    }
};

export default Reducers;