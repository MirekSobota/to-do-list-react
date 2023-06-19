import { throttle, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";


function* watchFetchExampleTasksHandler() {
  console.log("Loading...")
    try {
     yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

export function* watchFetchExampleTasks() {
  yield throttle(2000, fetchExampleTasks.type, watchFetchExampleTasksHandler);
}
