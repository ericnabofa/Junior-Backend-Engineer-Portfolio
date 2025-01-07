import { Request, Response } from 'express';
import { prisma } from '../utils/prismaClient'; // Prisma client

// Create Task
export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, dueDate } = req.body;

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        dueDate,
        userId: req.userId, // From JWT
      },
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all tasks for the user or all tasks for admins
export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
      const tasks = await prisma.task.findMany({
        where: req.role === 'admin' ? {} : { userId: req.userId }, // Admins can view all tasks
      });
  
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

// Update Task
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, description, status, dueDate },
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Task
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
