import { combineReducers } from "redux";

import { home } from "../pages/Home/redux/reducer";

const appReducer = combineReducers({ home });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
