import { useSelector, useDispatch } from "react-redux";

import { StyledButtons, Button } from "./styled";
import {
  selectHideDone,
  setAllDone,
  toggleHideDone,
  selectAreTaskEmpty,
  selectIsEveryTaskDone,
  
} from "../taskSlice";

const Buttons = () => {
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const dispatch = useDispatch();

  return (
    <>
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
