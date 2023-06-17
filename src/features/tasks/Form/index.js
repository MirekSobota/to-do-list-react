import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FormContent, Input, Button } from "./styled";
import { addTask } from "../taskSlice";
import { nanoid } from "@reduxjs/toolkit/dist";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onInputChange = ({ target }) => setNewTaskContent(target.value);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }
    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );
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
