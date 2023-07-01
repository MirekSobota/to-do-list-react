import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { searchQueryParamName } from "../searchQueryParamName";
import {
  StyledLink,
  List,
  Item,
  Content,
  ToggleDoneButton,
  RemoveTaskButton,
} from "./styled";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../taskSlice";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ToggleDoneButton>

          <Content done={task.done}>
            <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <RemoveTaskButton onClick={() => dispatch(removeTask())}>
            🗑
          </RemoveTaskButton>
        </Item>
      ))}
    </List>
  );
};

export { TaskList };
