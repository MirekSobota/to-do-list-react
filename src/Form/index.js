import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onInputChange = ({ target }) => setNewTaskContent(target.value);
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form ">
      <input
        value={newTaskContent}
        className="form--input "
        name="name"
        placeholder="What need to be done?"
        autoFocus
        onChange={onInputChange}
      />
      <button className="form--button">Add task</button>
    </form>
  );
};

export default Form;
