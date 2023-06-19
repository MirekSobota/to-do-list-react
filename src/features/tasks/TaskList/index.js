import { useDispatch, useSelector } from "react-redux";

import {
  List,
  Item,
  Content,
  ToggleDoneButton,
  RemoveTaskButton,
} from "./styled";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../taskSlice";

const TaskList = () => {
  const  hideDone  = useSelector(selectHideDone);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ToggleDoneButton>

          <Content done={task.done}>{task.content}</Content>
          <RemoveTaskButton onClick={() => dispatch(removeTask())}>
            🗑
          </RemoveTaskButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
