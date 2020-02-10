import { createInput } from "../utils/inputsHelper";
import {
  INPUT_TITLE,
  INPUT_TEXT,
  CLEAR_ADD_POST,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_ASYNC_REQUEST
} from "../constants/AddPost";

export const setTitle = value => {
  return createInput(INPUT_TITLE, value);
};

export const setText = value => {
  return createInput(INPUT_TEXT, value);
};

export const addPostAsyncRequest = () => {
  return {
    type: ADD_POST_ASYNC_REQUEST
  };
};

export const addPostRequest = () => {
  return {
    type: ADD_POST_REQUEST
  };
};

export const addPostSuccess = () => {
  return {
    type: ADD_POST_SUCCESS
  };
};

export const addPostFailure = error => {
  return {
    type: ADD_POST_FAILURE,
    error
  };
};

export const clearAddPost = () => {
  return {
    type: CLEAR_ADD_POST
  };
};
