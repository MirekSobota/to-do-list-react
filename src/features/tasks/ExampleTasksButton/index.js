import { useSelector, useDispatch } from "react-redux";

import { StyledButtons, Button } from "../Buttons/styled";
import { fetchExampleTasks, selectTasksState } from "../taskSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const { loading, showButton, error } = useSelector(selectTasksState);

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
      {error && (
        <Button >Error! Can't load example tasks!</Button>
      )}
    </StyledButtons>
  );
};


export { ExampleTasksButton };
