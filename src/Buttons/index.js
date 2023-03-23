import "./style.css";
const Buttons = ({ tasks, hideDone }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="buttons__button">
        {!hideDone ? "Hide" : "Show"} done tasks
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Finish all tasks
      </button>
    </div>
  );

export default Buttons;
