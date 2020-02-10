import { all } from "redux-saga/effects";

import { watchAddPostAsync } from "./addPostWatch";
import { watchSignInAsync } from "./signInWatch";
import { watchSignUpAsync } from "./signUpWatch";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchSignInAsync(), watchSignUpAsync(), watchAddPostAsync()]);
}
