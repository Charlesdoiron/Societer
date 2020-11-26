import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchPageReducer } from "./fetchPage/reducer";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const initStore = () => {
  return createStore(
    combineReducers({
      fetchPageReducer
    }),
    bindMiddleware([thunkMiddleware])
  );
};
