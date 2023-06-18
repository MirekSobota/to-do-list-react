import { useSelector, useDispatch } from "react-redux";

import { StyledButtons, Button } from "./styled";
import { selectTasks, setAllDone, toggleHideDone } from "../taskSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <StyledButtons>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {!hideDone ? "Hide" : "Show"} done tasks
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Finish all tasks
        </Button>
      </StyledButtons>
    )
  );
};
export default Buttons;
