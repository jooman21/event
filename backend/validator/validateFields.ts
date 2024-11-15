// validateFields.ts

import { Request, Response, NextFunction } from "express";

export const validateEventFields = (req: Request, res: Response, next: NextFunction): void => {
  const { title,  location, description } = req.body;

  // Check for missing fields
  if (!title  || !location || !description) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  // Validate field lengths
  if (title.length > 255) {
    res.status(400).json({ error: "Title must be less than 255 characters." });
    return;
  }
  if (location.length > 255) {
    res.status(400).json({ error: "Location must be less than 255 characters." });
    return;
  }
  if (description.length > 500) {
    res.status(400).json({ error: "Description must be less than 500 characters." });
    return;
  }

 
  

  // Proceed to the next middleware/controller
  next();
};
