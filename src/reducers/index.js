import { combineReducers } from "redux";
import { loggedUserReducer } from "./loggedUser";
import { signInputsReducer } from "./signInputs";
import { addPostReducer } from "./addPost";

const allReducers = combineReducers({
  loggedUser: loggedUserReducer,
  signInputs: signInputsReducer,
  addPost: addPostReducer
});

export default allReducers;
