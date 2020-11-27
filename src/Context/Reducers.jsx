const Reducers = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: true
            }
        case "LOGOUT":
            return {
                ...state,
                loginData: {},
                isLogin: false
            }
        default:
            throw new Error()
    }
};

export default Reducers;