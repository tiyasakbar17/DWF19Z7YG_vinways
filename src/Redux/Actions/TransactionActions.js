import Axios from "axios";
import { popUp } from "./PopUpActions";

const configForm = {
  headers: {
    "Content-type": "multipart/form-data",
  },
};

const baseUrl = "http://localhost:3001/api/v1";

export const loadTransactions = () => async (dispatch) => {
  try {
    const result = await Axios.get(`${baseUrl}/transactions`);
    dispatch({
      type: "LOAD_TRANSACTIONS",
      payload: result.data.data.transactions,
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      if (error.response.data.message) {
        dispatch(popUp(error.response.data.message));
      }
    }
    dispatch({
      type: "TRANS_ERROR",
    });
  }
};
export const uploadTransaction = (data) => async (dispatch) => {
  try {
    await Axios.post(`${baseUrl}/transaction`, data, configForm);
    dispatch(
      popUp(
        "Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you"
      )
    );
  } catch (error) {
    console.log(error);
    if (error.response) {
      if (error.response.data.message) {
        dispatch(popUp(error.response.data.message));
      }
    }
    dispatch({
      type: "TRANS_ERROR",
    });
  }
};
