import { configureStore } from "@reduxjs/toolkit/dist";
import tasksReducer from "./features/tasks/taskSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
