import 'express';

declare global {
  namespace Express {
    interface Request {
      userId: number; // Ensure `userId` is always defined
      role?: string;  // Optional: Add `role` if used
    }
  }
}
