import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onInputChange = ({ target }) => setNewTaskContent(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent) {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="form ">
      <input
        value={newTaskContent}
        className="form__input "
        name="name"
        placeholder="What need to be done?"
        autoFocus
        onChange={onInputChange}
      />
      <button className="form__button">Add task</button>
    </form>
  );
};

export default Form;
