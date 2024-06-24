import React from "react";
import TaskItem from "../molecules/TaskItem";
import { Task } from "../../utils/types";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
  editTaskName: (id: number, newName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTask,
  removeTask,
  editTaskName,
}) => (
  <div>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        toggleTask={toggleTask}
        removeTask={removeTask}
        editTaskName={editTaskName}
      />
    ))}
  </div>
);

export default TaskList;
