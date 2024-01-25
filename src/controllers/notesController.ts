import { Request, Response } from "express";
import { notesService } from "../services/notesService";

export const getAllNotes = (req: Request, res: Response) => {
  const notes = notesService.getAllNotes();
  res.json(notes);
};

export const getNoteById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const note = notesService.getNoteById(id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

export const createNote = (req: Request, res: Response) => {
  const { title, body } = req.body;
  const newNote = notesService.createNote(title, body);
  res.status(201).json(newNote);
};

export const updateNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { title, body } = req.body;
  const updatedNote = notesService.updateNote(id, title, body);

  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

export const deleteNote = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const deletedNote = notesService.deleteNote(id);

  if (deletedNote) {
    res.json(deletedNote);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};
