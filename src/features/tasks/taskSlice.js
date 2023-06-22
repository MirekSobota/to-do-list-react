import { createSlice } from "@reduxjs/toolkit";

const tasksSLice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
    loading: false,
    error: null,
    showButton: true,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true;
      });
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    fetchExampleTasksStatus: (state) => {
      state.loading = true;
      state.error = null;
      state.showButton = false;

      
    },
    setError: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
      state.showButton = true;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  fetchExampleTasksStatus,
  setError,
} = tasksSLice.actions;
    

export const selectTasksState = (state) => state.tasks;


export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTaskEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export default tasksSLice.reducer;
