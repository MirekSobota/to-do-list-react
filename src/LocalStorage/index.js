import { useEffect } from "react";

const Storage = ({ tasks, setTasks }) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
};

export { Storage };
