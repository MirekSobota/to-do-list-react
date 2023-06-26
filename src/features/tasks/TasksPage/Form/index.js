import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit/dist";

import { FormContent, Button } from "./styled";
import { addTask } from "../../taskSlice";
import Input from "../../Input";

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

export { Form };
