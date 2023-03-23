import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "test1", done: false },
  { id: 2, content: "test2", done: true },
];



function App() {
const [hideDone, setHideDone] = useState(false);

const toggleHideDone = () => {
  setHideDone(hideDone => !hideDone);
};

  return (
    <Container>
      <Header title="Tasks list"/>
      <Section title="Add new task" body={<Form />} />

      <Section
        title="A list of tasks"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />
        }
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
