import { Note } from '../models/noteModel';

export interface NotesService {
  getAllNotes(): Note[];
  getNoteById(id: number): Note | undefined;
  createNote(title: string, body: string): Note;
  updateNote(id: number, title: string, body: string): Note | undefined;
  deleteNote(id: number): Note | undefined;
}

