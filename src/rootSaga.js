import { all } from "redux-saga/effects";

import { taskSaga } from "./features/tasks/taskSaga";

export default function* rootSaga() {
  yield all([taskSaga()]);
}
