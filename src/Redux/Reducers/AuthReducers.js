const innitialState = {
  isLogin: false,
  userData: null,
  userTransactions: [],
  token: localStorage.getItem("token") || null,
  loading: true,
};

const Auth = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_DATA":
      return {
        ...state,
        isLogin: true,
        userData: payload,
        loading: false,
      };
    case "USER_TRANS":
      return {
        ...state,
        userTransactions: payload,
      };
    case "REGISTER":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLogin: true,
        token: payload.token,
      };
    case "LOGIN":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        userData: null,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default Auth;
