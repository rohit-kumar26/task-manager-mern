import React from "react";
import "./TaskList.css"; // Add this line

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className="task-item">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-desc">{task.description}</p>
          <div className="task-actions">
            <button className="task-edit" onClick={() => onEdit(task)}>
              Edit
            </button>
            <button className="task-delete" onClick={() => onDelete(task._id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
