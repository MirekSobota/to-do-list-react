import { useEffect } from "react";

const Storage = ({ tasks }) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
};

export { Storage };
