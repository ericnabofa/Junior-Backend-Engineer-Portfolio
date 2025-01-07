import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../auth/auth.service'; // Utility to generate JWT
import { prisma } from '../utils/prismaClient'; // Prisma client instance for database operations

/**
 * Handles user signup requests.
 * Validates user input, checks if the user already exists, hashes the password, creates a new user, and returns a JWT.
 *
 * @param req - The Express request object
 * @param res - The Express response object
 */
export const signup = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Check if a user with the given username already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: { username, password: hashedPassword },
    });

    // Generate a JWT for the new user
    const token = generateToken({ userId: newUser.id });

    // Respond with a success message and the JWT
    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error(error); // Log any server errors
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Handles user login requests.
 * Validates credentials, checks if the user exists, compares the password, and returns a JWT.
 *
 * @param req - The Express request object
 * @param res - The Express response object
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Find the user by username in the database
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Generate a JWT for the user
    const token = generateToken({ userId: user.id });

    // Respond with a success message and the JWT
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error); // Log any server errors
    res.status(500).json({ message: 'Server error' });
  }
};
