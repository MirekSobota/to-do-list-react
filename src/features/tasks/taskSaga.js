import {
  call,
  put,
  delay,
  takeEvery,
  select,
  takeLatest,
} from "redux-saga/effects";

import { fetchExampleTasks, selectTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleTasksStatus,
  fetchExampleTasksStatusDone,
  setError,
} from "./taskSlice";
import { saveTasksInLocalStorage } from "./taskLocalStorage";

function* watchFetchExampleTasksHandler() {
  try {
    yield put(fetchExampleTasksStatus());
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(fetchExampleTasksStatusDone());
  } catch (error) {
    yield put(setError(error.message));
    console.error("Something went wrong", error);
    yield delay(3000);
    yield put(fetchExampleTasksStatusDone());
  }
}
function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* taskSaga() {
  yield takeLatest(fetchExampleTasks.type, watchFetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
