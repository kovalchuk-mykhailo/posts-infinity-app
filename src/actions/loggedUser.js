import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_ASYNC_REQUEST,
  CLEAR_ERROR,
  SIGN_IN_ASYNC_REQUEST
} from "../constants/Sign";

export const signInAsyncRequestUser = () => {
  return {
    type: SIGN_IN_ASYNC_REQUEST
  };
};

export const signInRequestUser = () => {
  return {
    type: SIGN_IN_REQUEST
  };
};

export const signInSuccessUser = (id, userName) => {
  return {
    type: SIGN_IN_SUCCESS,
    id,
    userName
  };
};

export const signInFailureUser = error => {
  return {
    type: SIGN_IN_FAILURE,
    error
  };
};

export const signOutSuccessUser = () => {
  return {
    type: SIGN_OUT_SUCCESS
  };
};

export const signUpAsyncRequestUser = () => {
  return {
    type: SIGN_UP_ASYNC_REQUEST
  };
};

export const signUpRequestUser = () => {
  return {
    type: SIGN_UP_REQUEST
  };
};

export const signUpSuccessUser = (id, userName) => {
  return {
    type: SIGN_UP_SUCCESS,
    id,
    userName
  };
};

export const signUpFailureUser = error => {
  return {
    type: SIGN_UP_FAILURE,
    error
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};
