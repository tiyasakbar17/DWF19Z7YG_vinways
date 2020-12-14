import Axios from "axios";
import { closeLoading, popUp, showProgress } from "./PopUpActions";

const baseUrl = "http://localhost:5000/api/v1";
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

export const loadArtists = () => async (dispatch) => {
  try {
    const result = await Axios.get(`${baseUrl}/artists`);
    dispatch({
      type: "LOAD_ARTISTS",
      payload: result.data.data.artists,
    });
    dispatch({
      type: "LOAD_THUMBNAILS",
    });
    dispatch({
      type: "LOAD_MUSICS",
    });
    dispatch(closeLoading());
  } catch (error) {
    console.log(error);
    if (error.response) {
      if (error.response.data.message) {
        dispatch(popUp(error.response.data.message));
      }
    }
    dispatch({
      type: "MUSIC_ERROR",
    });
  }
};
export const addArtist = (data) => async (dispatch) => {
  try {
    const result = await Axios.post(
      `${baseUrl}/artist`,
      data,
      configForm(dispatch)
    );
    dispatch(popUp(result.data.message));
    dispatch({
      type: "PUSH_HOME",
    });
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      dispatch(popUp(error.response.data.message));
    } else {
      dispatch(popUp("Server Error"));
    }
  }
};
export const addMusic = (data) => async (dispatch) => {
  try {
    const result = await Axios.post(
      `${baseUrl}/music`,
      data,
      configForm(dispatch)
    );
    dispatch(popUp(result.data.message));
    dispatch({
      type: "PUSH_HOME",
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      dispatch(popUp(error.response.data.message));
    } else {
      dispatch(popUp("Server Error"));
    }
  }
};
