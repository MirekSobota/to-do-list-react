import { useDispatch } from "react-redux";

import { StyledButtons, Button } from "../Buttons/styled";
import { fetchExampleTasks } from "../taskSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();

  
  return (
    <>
      <StyledButtons>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
          Get example tasks
        </Button>
      </StyledButtons>
    </>
  );
};
export default ExampleTasksButton;
