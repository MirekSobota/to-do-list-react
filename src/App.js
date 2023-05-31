import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import {Container} from "./Container/styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { useTasks } from "./useTasks";

function App() {
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    hideDone,
    toggleHideDone,
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Tasks list" />
        <Section title="Add new task" body={<Form addNewTask={addNewTask} />} />

        <Section
          title="A list of tasks"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
