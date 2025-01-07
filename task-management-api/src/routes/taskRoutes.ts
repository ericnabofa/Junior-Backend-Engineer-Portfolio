import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../tasks/task.controller';
import {
  verifyTokenMiddleware,
  verifyRoleMiddleware,
  verifyTaskOwnershipMiddleware,
} from '../middleware/authMiddleware';

const router = express.Router();

// Routes accessible to any authenticated user
router.post('/tasks', verifyTokenMiddleware, createTask); // Create a task
router.get('/tasks', verifyTokenMiddleware, getTasks); // Get all tasks for the user (and any task)

router.get('/tasks/:id', verifyTokenMiddleware, getTasks); // Get specific task by ID

// Routes for updating and deleting tasks with ownership or admin access
router.put(
  '/tasks/:id',
  verifyTokenMiddleware,
  verifyTaskOwnershipMiddleware,
  updateTask
); // Update task

router.delete(
  '/tasks/:id',
  verifyTokenMiddleware,
  verifyTaskOwnershipMiddleware,
  deleteTask
); // Delete task

// Admin-only route to create tasks
router.post(
  '/admin/tasks',
  verifyTokenMiddleware,
  verifyRoleMiddleware(['admin']),
  createTask
);

export default router;
