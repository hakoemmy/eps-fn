import { takeEvery, all, put } from "redux-saga/effects";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from "../actions/session";
import sessionService from "services/auth/session";
import store from "store";
import { roleAccess } from "../../constants";

export function* login({ payload }) {
  try {
    const { body, headers, response, status } = yield sessionService.login(
      payload
    );
    if (status === 200) {
      if (body.data.roleId <= 4) {
        yield put({ type: LOGIN_SUCCESS, payload: body.data });
        store.set("token", headers.accesstoken);
        window.location = "/";
      } else
        throw new Error(
          "You are not allowed to access this resource."
        );
    }
    if (response) throw new Error(response.data.message);
  } catch (error) {
    yield put({ type: LOGIN_ERROR, payload: error.message });
  }
}

export function* getProfile() {
  yield put({ type: GET_PROFILE });
  if (!store.get("token")) return;
  try {
    const { body, response, status } = yield sessionService.getProfile();
    if (status === 200) {
      yield put({ type: GET_PROFILE_SUCCESS, payload: body.data });
    }
    if (response) throw new Error(response.data.message);
  } catch (error) {
    yield put({ type: GET_PROFILE_ERROR, payload: error.message });
  }
}

export function* signup(credentials) {
  try {
    const { body } = yield sessionService.signup(credentials);
    yield put({ type: SIGNUP_SUCCESS, payload: { credentials: body } });
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, payload: { error } });
  }
}

export function* forgotPassword({ payload }) {
  try {
    const { body } = yield sessionService.forgotPassword(payload);
    yield put({ type: FORGOT_PASSWORD_SUCCESS, payload: body });
  } catch (error) {
    yield put({ type: FORGOT_PASSWORD_ERROR, payload: { error } });
  }
}

export function* resetPassword({ payload }) {
  try {
    const { body, status } = yield sessionService.resetPassword(payload);
    if (status === 200) {
      yield put({ type: RESET_PASSWORD_SUCCESS, payload: body });
      window.location = "/login";
    }
  } catch (error) {
    yield put({ type: RESET_PASSWORD_ERROR, payload: { error } });
  }
}


export default function* sessionRootSaga() {
  yield all([
    takeEvery(LOGIN, login),
    takeEvery(SIGNUP, signup),
    takeEvery(FORGOT_PASSWORD, forgotPassword),
    takeEvery(RESET_PASSWORD, resetPassword),
    getProfile(),
  ]);
}
