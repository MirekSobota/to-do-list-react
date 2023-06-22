import { configureStore } from "@reduxjs/toolkit/dist";
import createSagaMiddleware from "redux-saga";

import tasksReducer from "./features/tasks/taskSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
