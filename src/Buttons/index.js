import "./style.css";
const Buttons = ({ tasks, hideDoneTasks }) =>
  tasks.length > 0 && (
    <div className="section__tasks__buttons">
      <button className="section__subHeader__buttonHideDone">
        {!hideDoneTasks ? "Hide" : "Show"} done tasks
      </button>
      <button
        className="section__subHeader__buttonFinishAll"
        disabled={tasks.every(({ done }) => done)}
      >
        Finish all tasks
      </button>
    </div>
  );

export default Buttons;
