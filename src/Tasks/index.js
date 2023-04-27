import "./style.css";
import { List, Item, Button } from "./syled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item
        key={task.id}
        hidded={task.done && hideDone}
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
      </Item>
    ))}
  </List>
);

export default Tasks;
