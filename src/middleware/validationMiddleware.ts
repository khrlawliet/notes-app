import { Request, Response, NextFunction } from "express";

export const validateNote = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, body } = req.body;

  if (!title || typeof title !== "string") {
    res.status(400).json({ message: "Invalid title" });
  } else if (!body || typeof body !== "string") {
    res.status(400).json({ message: "Invalid body" });
  } else {
    next();
  }
};
