import "./style.css";

const Form = () => (
  <form className="section__form ">
    <input
      className="section__form--input "
      name="name"
      placeholder="What need to be done?"
    />
    <button className="section__form--button">Add task</button>
  </form>
);

export default Form;
