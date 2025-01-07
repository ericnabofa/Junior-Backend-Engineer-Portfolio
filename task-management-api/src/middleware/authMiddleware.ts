import { Request, Response, NextFunction } from 'express';
import { verifyJwtToken } from '../auth/auth.service'; // JWT Service
import { prisma } from '../utils/prismaClient'; // Prisma client

export const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(403).json({ message: 'Authorization required' });
    return; // Ensure the function exits after sending a response
  }

  try {
    const decoded: any = verifyJwtToken(token);

    if (!decoded) {
      res.status(403).json({ message: 'Invalid token' });
      return; // Ensure the function exits after sending a response
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      res.status(403).json({ message: 'User not found' });
      return; // Ensure the function exits after sending a response
    }

    // Attach user information to the request object
    req.userId = decoded.userId;
    //req.role = user.role; // Optional: Attach the user role if applicable

    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Middleware to check for specific roles
export const verifyRoleMiddleware = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
      const userRole = req.role; // Extract user's role from the request object
  
      if (!userRole || !roles.includes(userRole)) {
        res.status(403).json({ message: 'Access denied' });
        return; // Ensure the function exits after sending a response
      }
  
      next(); // Pass control to the next middleware or route handler
    };
  };


// Middleware to verify task ownership or admin access for updates/deletes
export const verifyTaskOwnershipMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params; // Task ID from the route parameter

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return; // Ensure function exits after responding
    }

    // Check if the user is the owner of the task or an admin
    if (task.userId !== req.userId && req.role !== 'admin') {
      res.status(403).json({ message: 'Access denied' });
      return; // Ensure function exits after responding
    }

    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
