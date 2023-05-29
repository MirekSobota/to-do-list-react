import { useState, useRef } from "react";
import { FormContent, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onInputChange = ({ target }) => setNewTaskContent(target.value);
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <FormContent onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        name="name"
        placeholder="What need to be done?"
        autoFocus
        onChange={onInputChange}
      />
      <Button onClick={focusInput}>Add task</Button>
    </FormContent>
  );
};

export default Form;
