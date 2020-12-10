import { combineReducers } from "redux";
import Auth from "./AuthReducers";
import PopUp from "./PopUpReducers";
import Musics from "./MusicReducers";
import Transactions from "./TransactionReducers";

const Reducers = combineReducers({ Auth, PopUp, Musics, Transactions });

export default Reducers;
