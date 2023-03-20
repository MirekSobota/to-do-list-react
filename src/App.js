import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "test1", done: false },
  { id: 2, content: "test2", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Tasks list"/>
      <Section title="Add new task" body={<Form />} />

      <Section
        title="A list of tasks"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
