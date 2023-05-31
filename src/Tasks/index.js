import {
  List,
  Item,
  Content,
  Button,
  ToggleDoneButton,
  RemoveTaskButton,
} from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button onClick={() => toggleTaskDone(task.id)}>
          <ToggleDoneButton>{task.done ? "✔" : ""}</ToggleDoneButton>
        </Button>

        <Content done={task.done}>{task.content}</Content>
        <Button onClick={() => removeTask(task.id)}>
          <RemoveTaskButton>🗑</RemoveTaskButton>
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
