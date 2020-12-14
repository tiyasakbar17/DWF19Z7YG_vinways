import Axios from "axios";
import SetAuthToken from "../../Context/SetAuthToken";
import { popUp, closePlayer, showLoading, showProgress } from "./PopUpActions";

const configJson = {
  headers: {
    "Content-type": "application/json",
  },
};
const configForm = (dispatch) => ({
  headers: {
    "Content-type": "multipart/form-data",
  },
  onUploadProgress: (ProgressEvent) => {
    let percentage = Math.round(
      (ProgressEvent.loaded * 100) / ProgressEvent.total
    );
    dispatch(showProgress(percentage));
  },
});

const baseUrl = "http://localhost:5000/api/v1";

export const loadData = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    SetAuthToken(localStorage.getItem("token"));
  }

  try {
    const result = await Axios.get(`${baseUrl}/getData`);
    dispatch({
      type: "LOAD_DATA",
      payload: result.data.data.user,
    });
  } catch (error) {
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};
export const registerUser = (data) => async (dispatch) => {
  try {
    const result = await Axios.post(`${baseUrl}/register`, data, configJson);
    dispatch({
      type: "REGISTER",
      payload: result.data.data.user,
    });
    dispatch(loadData());
  } catch (error) {
    console.log(error);
    if (error.response) {
      dispatch(popUp(error.response.data.message));
    }
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};
export const userLogin = (data) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const result = await Axios.post(`${baseUrl}/login`, data, configJson);
    dispatch({
      type: "LOGIN",
      payload: result.data.data.chanel,
    });
    dispatch(loadData());
  } catch (error) {
    if (error.response) {
      dispatch(popUp(error.response.data.message));
    } else {
      dispatch(popUp("Server Error"));
    }
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};
export const changePict = (data) => async (dispatch) => {
  try {
    const change = Axios.patch(
      `${baseUrl}/changePicture`,
      data,
      configForm(dispatch)
    );
    if (change.data.status === "success") {
      dispatch(loadData());
      dispatch(popUp(change.data.message));
    } else {
      dispatch(popUp("Something Went Wrong"));
    }
  } catch (error) {
    console.log(error);
    if (error.response) {
      dispatch(popUp(error.response.data.message));
    } else {
      dispatch(popUp(JSON.stringify(error)));
    }
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT",
    });
    dispatch({
      type: "MUSIC_ERROR",
    });
    dispatch({
      type: "TRANS_ERROR",
    });
    dispatch(closePlayer());
  } catch (error) {
    console.log(error);
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};
