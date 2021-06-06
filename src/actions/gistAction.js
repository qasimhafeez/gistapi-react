import * as types from "./types";
import { useDispatch } from "react-redux";
import { getGistForUser, getPublicGists } from "../services/gistService";

export default () => {
  let dispatch = useDispatch();

  const fetchAllGists = () => {
    getPublicGists()
      .then((res) => {
        dispatch({
          type: types.FETCH_ALL_GISTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.FETCH_ALL_GISTS_ERROR,
          payload: err.message,
        });
      });
  };

  const fetchSingleGistByUserName = (username) => {
    getGistForUser(username)
      .then((res) => {
        dispatch({
          type: types.FETCH_SINGLE_GIST_BY_USERNAME,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.FETCH_SINGLE_GIST_BY_USERNAME_ERROR,
          payload: err.message,
        });
      });
  };

  return { fetchAllGists, fetchSingleGistByUserName };
};
