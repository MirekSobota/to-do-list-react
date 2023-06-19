import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/taskSaga";

export default function* rootSaga() {
  yield all([watchFetchExampleTasks()]);
}
