import {
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CLEAR_ERROR
} from "../constants/Sign";

import { signInUser, signOutUser, findUserById } from "../utils/authentication";

const initialState = {
  id: -1,
  userName: "",
  isLoading: false,
  error: ""
};

export const loggedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      signInUser(findUserById(action.id));
      return {
        ...state,
        id: action.id,
        userName: action.userName,
        isLoading: false
      };
    }

    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case SIGN_OUT_SUCCESS: {
      signOutUser();
      return {
        ...state,
        id: "",
        isLoading: false
      };
    }

    case SIGN_UP_SUCCESS: {
      signInUser(findUserById(action.id));
      return {
        ...state,
        id: action.id,
        userName: action.userName,
        isLoading: false
      };
    }

    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: ""
      };

    default:
      return state;
  }
};
