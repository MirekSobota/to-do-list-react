import { throttle, call, put, delay } from "redux-saga/effects";

import { fetchExampleTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasksStatus, setError } from "./taskSlice";

function* watchFetchExampleTasksHandler() {
  try {
    yield put(fetchExampleTasksStatus());
    yield delay(3000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong!");
    yield put(setError(error.message));
  }
}
export function* watchFetchExampleTasks() {
  yield throttle(2000, fetchExampleTasks.type, watchFetchExampleTasksHandler);
}
