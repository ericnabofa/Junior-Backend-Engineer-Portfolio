import express from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../tasks/task.controller';
import { verifyTokenMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// Create Task
router.post('/tasks', verifyTokenMiddleware, createTask);

// Get Tasks
router.get('/tasks', verifyTokenMiddleware, getTasks);

// Update Task
router.put('/tasks/:id', verifyTokenMiddleware, updateTask);

// Delete Task
router.delete('/tasks/:id', verifyTokenMiddleware, deleteTask);

export default router;
