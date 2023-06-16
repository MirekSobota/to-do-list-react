import { StyledButtons, Button } from "./styled";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <StyledButtons>
      <Button onClick={toggleHideDone}>
        {!hideDone ? "Hide" : "Show"} done tasks
      </Button>
      <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
        Finish all tasks
      </Button>
    </StyledButtons>
  );

export default Buttons;
