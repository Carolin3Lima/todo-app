import React, { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import { FaTrash } from "react-icons/fa";
import { Task } from "../../utils/types";
import {
  TaskItemWrapper,
  TaskName,
  RemoveIcon,
} from "./styles/TaskItem.styles";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
  editTaskName: (id: number, newName: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTask,
  removeTask,
  editTaskName,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (newName.trim() !== task.name) {
      editTaskName(task.id, newName.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <TaskItemWrapper completed={task.completed}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
          />
        ) : (
          <TaskName onDoubleClick={handleEdit}>{task.name}</TaskName>
        )}
      </div>
      <RemoveIcon onClick={() => removeTask(task.id)} data-testid="remove-task">
        <FaTrash />
      </RemoveIcon>
    </TaskItemWrapper>
  );
};

export default TaskItem;
