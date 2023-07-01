import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Section } from "../../../common/Section";
import { Header } from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { getTaskById } from "../taskSlice";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Task details" />
      <Section
        title={task ? task.content : "A task was not found."}
        body={
          task && (
            <>
            <strong>Task status:</strong>
            {task.done
              ? "  Task has been completed ✔"
              : "  Task has not been completed ✖"}
          </>
          )
        }
      />
    </Container>
  );
};

export { TaskPage };
