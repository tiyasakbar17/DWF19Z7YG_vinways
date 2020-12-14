const innitialState = {
  isPoped: false,
  message: "",
  loading: true,
  paymentComp: false,
  playerComp: false,
  loadingComp: false,
  userProfile: false,
  musicToPlay: {
    audio: "",
    img: "",
  },
  progress: {
    isShown: false,
    percentage: 0,
  },
};

const PopUp = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "POP_UP":
      return {
        ...state,
        isPoped: !state.isPoped,
        message: payload,
        progress: { isShown: false, percentage: 0 },
        loadingComp: false,
      };
    case "PAYMENT":
      return {
        ...state,
        paymentComp: !state.paymentComp,
      };
    case "OPEN_MPLAYER":
      return {
        ...state,
        playerComp: true,
        musicToPlay: payload,
      };
    case "CLOSE_MPLAYER":
      return {
        ...state,
        playerComp: false,
        musicToPlay: {
          audio: "",
          img: "",
        },
      };
    case "OPEN_PROGRESS":
      return {
        ...state,
        progress: { isShown: true, percentage: payload },
      };
    case "OPEN_LOADING":
      return {
        ...state,
        loadingComp: true,
      };
    case "CLOSE_LOADING":
      return {
        ...state,
        loadingComp: false,
      };
    case "OPEN_PROFILE":
      return {
        ...state,
        userProfile: true,
      };
    case "CLOSE_PROFILE":
      return {
        ...state,
        userProfile: false,
      };
    default:
      return state;
  }
};

export default PopUp;
