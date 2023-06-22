import { useSelector, useDispatch } from "react-redux";

import { StyledButtons, Button } from "../Buttons/styled";
import { fetchExampleTasks, selectTasksState } from "../taskSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const { loading, showButton } = useSelector(selectTasksState);

  const handleClick = () => {
    if (!loading) {
      dispatch(fetchExampleTasks());
    }
  };

  return (
    <StyledButtons>
      {showButton && ( 
        <Button onClick={handleClick}>Get example tasks</Button>
      )}
      {loading && (
        <Button disabled>Loading...</Button>
      )}
    </StyledButtons>
  );
};


export { ExampleTasksButton };
