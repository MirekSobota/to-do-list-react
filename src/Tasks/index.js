import "./style.css";
const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="section__tasks ">
    {tasks.map((task) => (
      <li
        className={`taskList ${
          task.done && hideDoneTasks ? "taskList--hidden" : ""
        }`}
      >
        <button className="taskButton taskButton--done ">
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "taskDone" : ""}`}>{task.content}</span>
        <button className="taskButton taskButton--removeTask">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
