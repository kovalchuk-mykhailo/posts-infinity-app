import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_FIRSTNAME,
  INPUT_LASTNAME,
  CLEAR_SIGN_INPUTS,
  INPUT_USERNAME
} from "../constants/Inputs";

const initialState = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

export const signInputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_USERNAME:
      return {
        ...state,
        userName: action.value
      };

    case INPUT_EMAIL:
      return {
        ...state,
        email: action.value
      };

    case INPUT_PASSWORD:
      return {
        ...state,
        password: action.value
      };

    case INPUT_FIRSTNAME:
      return {
        ...state,
        firstName: action.value
      };

    case INPUT_LASTNAME:
      return {
        ...state,
        lastName: action.value
      };

    case CLEAR_SIGN_INPUTS:
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      };

    default:
      return state;
  }
};
