export const popUp = (message) => (dispatch) => {
  try {
    dispatch({
      type: "POP_UP",
      payload: message,
    });
  } catch (error) {
    console.log(error);
  }
};
export const showPayment = () => (dispatch) => {
  try {
    dispatch({
      type: "PAYMENT",
    });
  } catch (error) {
    console.log(error);
  }
};
export const showPlayer = (audio, img) => (dispatch) => {
  try {
    dispatch({
      type: "OPEN_MPLAYER",
      payload: {
        audio,
        img,
      },
    });
  } catch (error) {}
};
export const closePlayer = () => (dispatch) => {
  dispatch({
    type: "CLOSE_MPLAYER",
  });
};
export const showLoading = () => (dispatch) => {
  dispatch({
    type: "OPEN_LOADING",
  });
};
export const closeLoading = () => (dispatch) => {
  dispatch({
    type: "CLOSE_LOADING",
  });
};
export const showProfile = () => (dispatch) => {
  dispatch({
    type: "OPEN_PROFILE",
  });
};
export const closeProfile = () => (dispatch) => {
  dispatch({
    type: "CLOSE_PROFILE",
  });
};
export const showProgress = (data) => (dispatch) => {
  dispatch({
    type: "OPEN_PROGRESS",
    payload: data,
  });
};
