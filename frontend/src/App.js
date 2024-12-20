import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList2";
import "./App.css"; // Add this line

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  const handleSave = async (task) => {
    if (editingTask) {
      await updateTask(editingTask._id, task);
      setEditingTask(null);
    } else {
      await createTask(task);
    }
    fetchTasks();
  };

  const handleEdit = (task) => setEditingTask(task);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Task Manager</h1>
      {/* Check if the button renders */}
      <button onClick={toggleDarkMode} className="theme-toggle-btn">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <p>Add and manage your tasks effectively.</p>
      <TaskForm onSave={handleSave} task={editingTask} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );

  

};




export default App;
