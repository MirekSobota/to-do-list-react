import { useEffect } from "react";

 const Storage = ({tasks, setTasks}) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [setTasks]);
};

export {Storage}; 