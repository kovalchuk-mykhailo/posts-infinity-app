import {
  INPUT_PASSWORD,
  INPUT_FIRSTNAME,
  INPUT_LASTNAME,
  INPUT_EMAIL,
  CLEAR_SIGN_INPUTS,
  INPUT_USERNAME
} from "../constants/Inputs";
import { createInput } from "../utils/inputsHelper";

export const setUserName = value => {
  return createInput(INPUT_USERNAME, value);
};

export const setPassword = value => {
  return createInput(INPUT_PASSWORD, value);
};

export const setEmail = value => {
  return createInput(INPUT_EMAIL, value);
};

export const setFirstname = value => {
  return createInput(INPUT_FIRSTNAME, value);
};

export const setLastname = value => {
  return createInput(INPUT_LASTNAME, value);
};

export const clearSignInputs = () => {
  return {
    type: CLEAR_SIGN_INPUTS
  };
};
