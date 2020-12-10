import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

const initialState = {};

const middleware = [thunk];

const Store = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
