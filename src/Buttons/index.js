import { Functions__Buttons, Button } from "./styled";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <Functions__Buttons>
      <Button onClick={toggleHideDone}>
        {!hideDone ? "Hide" : "Show"} done tasks
      </Button>
      <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
        Finish all tasks
      </Button>
    </Functions__Buttons>
  );

export default Buttons;
