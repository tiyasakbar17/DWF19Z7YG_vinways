const innitialState = {
  isPoped: false,
  message: "",
  loading: true,
  paymentComp: false,
  playerComp: false,
  musicToPlay: "",
};

const PopUp = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "POP_UP":
      return {
        ...state,
        isPoped: !state.isPoped,
        message: payload,
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
        musicToPlay: "",
      };
    default:
      return state;
  }
};

export default PopUp;
