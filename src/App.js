import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "test1", done: false },
    { id: 2, content: "test2", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };


  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => { 
    setTasks((tasks) => tasks.map(task => ({...task, done: true})))
  };

  return (
    <Container>
      <Header title="Tasks list" />
      <Section title="Add new task" body={<Form />} />

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
  );
}

export default App;
