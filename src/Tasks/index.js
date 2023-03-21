import "./style.css";
const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks ">
    {tasks.map((task) => (
      <li
        className={`tasks__list ${
          task.done && hideDoneTasks ? "tasks__list--hidden" : ""
        }`}
      >
        <button className="tasks__button tasks__button--doneTask ">
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "tasks__done" : ""}`}>{task.content}</span>
        <button className="tasks__button tasks__button--removeTask">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
