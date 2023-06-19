import { useSelector, useDispatch } from "react-redux";

import { StyledButtons, Button } from "./styled";
import {
  selectHideDone,
  setAllDone,
  toggleHideDone,
  selectAreTaskEmpty,
  selectIsEveryTaskDone,
  fetchExampleTasks,
} from "../taskSlice";

const Buttons = () => {
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Get example tasks
      </Button>
      {!areTaskEmpty > 0 && (
        <StyledButtons>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {!hideDone ? "Hide" : "Show"} done tasks
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Finish all tasks
          </Button>
        </StyledButtons>
      )}
    </>
  );
};
export default Buttons;
