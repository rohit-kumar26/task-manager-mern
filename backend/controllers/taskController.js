const Task = require("../models/task");

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from the database
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create single or multiple tasks
const createTask = async (req, res) => {
  try {
    const { tasks } = req.body; // Expecting an array of tasks
    if (Array.isArray(tasks)) {
      const createdTasks = await Task.insertMany(tasks); // Insert multiple tasks
      res.status(201).json(createdTasks);
    } else {
      const task = new Task(req.body); // Create a single task if "tasks" is not an array
      const createdTask = await task.save();
      res.status(201).json(createdTask);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true }); // Return updated document
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
