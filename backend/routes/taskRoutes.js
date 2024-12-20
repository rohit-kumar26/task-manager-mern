// routes/taskRoutes.js
const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

// Routes
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
