import Axios from "axios";
import { popUp } from "./PopUpActions";

const baseUrl = "http://localhost:3001/api/v1";
const configForm = {
  headers: {
    "Content-type": "multipart/form-data",
  },
};

export const loadArtists = () => async (dispatch) => {
  try {
    const result = await Axios.get(`${baseUrl}/artists`);
    dispatch({
      type: "LOAD_ARTISTS",
      payload: result.data.data.artists,
    });
    dispatch({
      type: "LOAD_MUSICS",
    });
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
    const result = await Axios.post(`${baseUrl}/artist`, data, configForm);
    dispatch(popUp(result.data.message));
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      dispatch(popUp(error.response.data.message));
    }
    dispatch({
      type: "MUSIC_ERROR",
    });
  }
};
export const addMusic = (data) => async (dispatch) => {
  try {
    const result = await Axios.post(`${baseUrl}/music`, data, configForm);
    dispatch(popUp(result.data.message));
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      dispatch(popUp(error.response.data.messega));
    }
  }
};
