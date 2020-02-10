import { put, takeEvery, call, select } from "redux-saga/effects";
import {
  signInRequestUser,
  signInSuccessUser,
  signInFailureUser
} from "../actions/loggedUser";
import { signInUser } from "../utils/authentication";
import { responseOk } from "../utils/asyncHelper";
import { SIGN_IN_ASYNC_REQUEST } from "../constants/Sign";

function* requestSignInAsync() {
  try {
    const getInputs = state => state.signInputs;
    const inputs = yield select(getInputs);
    console.log("INPUTS (USER): ", inputs);

    yield put(signInRequestUser());
    const response = yield call(signInUser, inputs);
    console.log("response: ", response);

    if (responseOk(response)) {
      // success => login
      const user = response;
      console.log("User(response):", user);
      yield put(signInSuccessUser(user.id, user.userName)); // Will MUST BE token / userId
    } else {
      // invalid Data => send Error message
      throw new Error("Invalid Login Data");
    }
  } catch (error) {
    yield put(signInFailureUser(error.message));
  }
}

export function* watchSignInAsync() {
  yield takeEvery(SIGN_IN_ASYNC_REQUEST, requestSignInAsync); //Always watch for requestSignInAsync, when action.type = LOGIN_ASYNC_REQUEST
}
