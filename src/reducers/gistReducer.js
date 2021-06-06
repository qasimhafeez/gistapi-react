import * as types from "../actions/types";

const initialState = {
  gistsPublicList: [],
  gistsPublicListError: "",
  singleGistByUserName: [],
  singleGistByUserNameError: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_GISTS:
      return {
        ...state,
        gistsPublicList: action.payload,
      };
    case types.FETCH_ALL_GISTS_ERROR:
      return {
        ...state,
        gistsPublicListError: action.payload,
      };

    case types.FETCH_SINGLE_GIST_BY_USERNAME:
      return {
        ...state,
        singleGistByUserName: action.payload,
      };
    case types.FETCH_SINGLE_GIST_BY_USERNAME_ERROR:
      return {
        ...state,
        singleGistByUserNameError: action.payload,
      };

    default:
      return state;
  }
};
