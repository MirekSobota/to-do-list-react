import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Buttons } from "./Buttons";
import { ExampleTasksButton } from "./ExampleTasksButton";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container/styled";


function Tasks() {
  return (
    <Container>
      <Header title="Tasks list" />
      <Section
        title="Add new task"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />
      <Section
        title="A list of tasks"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
}

export { Tasks };
