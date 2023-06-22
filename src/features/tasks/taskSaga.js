import { throttle, call, put, delay } from "redux-saga/effects";

import { fetchExampleTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasksStatus,fetchExampleTasksStatusDone, setError } from "./taskSlice";

function* watchFetchExampleTasksHandler() {
  try {
    yield put(fetchExampleTasksStatus());
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(fetchExampleTasksStatusDone());
  } catch (error) {
    yield put(setError(error.message));
    (console.error("Something went wrong", error));
    yield delay(3000);
    yield put(fetchExampleTasksStatusDone());
  }
}
export function* watchFetchExampleTasks() {
  yield throttle(2000, fetchExampleTasks.type, watchFetchExampleTasksHandler);
}
