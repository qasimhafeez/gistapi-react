import { combineReducers } from "redux";

import gistReducer from "./gistReducer";

export default combineReducers({
  gists: gistReducer,
});
