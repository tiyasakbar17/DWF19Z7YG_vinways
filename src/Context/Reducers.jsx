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
        default:
            throw new Error()
    }
};

export default Reducers;