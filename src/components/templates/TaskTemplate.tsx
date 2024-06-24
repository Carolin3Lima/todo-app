import React, { useState, useEffect } from "react";
import TaskList from "../organisms/TaskList";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { Task } from "../../utils/types";

const TaskTemplate: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? (JSON.parse(savedTasks) as Task[]) : [];
  });
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskName.trim() === "") return;
    const newTask: Task = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTaskName = (id: number, newName: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task)),
    );
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="What needs to be done?"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
        editTaskName={editTaskName}
      />
    </div>
  );
};

export default TaskTemplate;
