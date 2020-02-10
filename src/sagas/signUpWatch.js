import { put, takeEvery, call, select } from "redux-saga/effects";
import {
  signUpRequestUser,
  signUpSuccessUser,
  signUpFailureUser
} from "../actions/loggedUser";

import { SIGN_UP_ASYNC_REQUEST } from "../constants/Sign";
import { signUpUser } from "../utils/authentication";
import { responseOk } from "../utils/asyncHelper";

function* requestSignUpAsync() {
  try {
    const getInputs = state => state.signInputs;
    const inputs = yield select(getInputs);
    console.log("INPUTS (USER): ", inputs);

    yield put(signUpRequestUser());
    const response = yield call(signUpUser, inputs);
    console.log("response: ", response);

    if (responseOk(response)) {
      // success => login
      const user = response;
      console.log("User(response):", user);
      yield put(signUpSuccessUser(user.id, user.userName)); // Will MUST BE token / userId
    } else {
      // invalid Data => send Error message
      throw new Error("Invalid Login Data");
    }
  } catch (error) {
    yield put(signUpFailureUser(error.message));
  }
}

export function* watchSignUpAsync() {
  yield takeEvery(SIGN_UP_ASYNC_REQUEST, requestSignUpAsync); //Always watch for requestSignInAsync, when action.type = LOGIN_ASYNC_REQUEST
}
