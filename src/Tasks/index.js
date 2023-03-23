import "./style.css";
const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks ">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__list ${
          task.done && hideDone ? "tasks__list--hidden" : ""
        }`}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="tasks__button tasks__button--doneTask "
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "tasks__done" : ""}`}>
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="tasks__button tasks__button--removeTask"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
