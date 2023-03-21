import "./style.css";

const Form = () => (
  <form className="form ">
    <input
      className="form--input "
      name="name"
      placeholder="What need to be done?"
    />
    <button className="form--button">Add task</button>
  </form>
);

export default Form;
