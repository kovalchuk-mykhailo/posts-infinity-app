import {
  INPUT_TEXT,
  INPUT_TITLE,
  CLEAR_ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE
} from "../constants/AddPost";

const initialState = {
  title: "",
  text: "",
  error: "",
  isLoading: false,
  isRedirected: false
};

export const addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.value
      };

    case INPUT_TITLE:
      return {
        ...state,
        title: action.value
      };

    case ADD_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ADD_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isRedirected: true
      };
    }

    case ADD_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case CLEAR_ADD_POST:
      return {
        title: "",
        text: "",
        error: "",
        isLoading: false,
        isRedirected: false
      };

    default:
      return state;
  }
};
