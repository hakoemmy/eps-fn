import { all } from "redux-saga/effects";
import auth from "redux/sagas/session";

export default function* rootSaga() {
  yield all([
    auth()
  ]);
}
