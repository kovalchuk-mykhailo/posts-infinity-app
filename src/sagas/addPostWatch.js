import { put, takeEvery, call, select } from "redux-saga/effects";
import {
  addPostRequest,
  addPostSuccess,
  addPostFailure
} from "../actions/addPost";
import { ADD_POST_ASYNC_REQUEST } from "../constants/AddPost";
import { addPostAsync } from "../utils/postsHelper";
import { responseOk } from "../utils/asyncHelper";

function* requestAddPostAsync() {
  try {
    const getAddPost = state => state.addPost;
    const getUserName = state => state.loggedUser.userName;

    const { title, text } = yield select(getAddPost);
    const userName = yield select(getUserName);
    console.log("ADD POST DATA: ", title, text, userName);

    yield put(addPostRequest());
    const response = yield call(addPostAsync, title, text, userName);
    console.log("response: ", response);

    if (responseOk(response)) {
      yield put(addPostSuccess());
    } else {
      // invalid Data => send Error message
      throw new Error("Invalid Post Data");
    }
  } catch (error) {
    yield put(addPostFailure(error.message));
  }
}

export function* watchAddPostAsync() {
  yield takeEvery(ADD_POST_ASYNC_REQUEST, requestAddPostAsync); //Always watch for requestSignInAsync, when action.type = LOGIN_ASYNC_REQUEST
}
