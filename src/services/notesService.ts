import { Note } from "../models/noteModel";
import { NotesService } from "./notesServiceInterface";


//in-memory array of notes
const notes: Note[] = [
  { id: 1, title: "Note 1", body: "this is body" },
  { id: 2, title: "Note 2", body: "this is body" },
];

export const notesService: NotesService = {

  getAllNotes: () => {
    return notes;
  },

  getNoteById: (id: number) => {
    return notes.find((note) => note.id === id);
  },

  createNote: (title: string, body: string) => {
    const newNote: Note = {
      id: Date.now(), 
      title,
      body
    };
    notes.push(newNote);
    return newNote;
  },

  updateNote: (id: number, title: string, body: string) => {
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex !== -1) {
      notes[noteIndex].title = title;
      notes[noteIndex].body = body;
      return notes[noteIndex];
    }

    return undefined;
  },

  deleteNote: (id: number) => {
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex !== -1) {
      const deletedNote = notes.splice(noteIndex, 1)[0];
      return deletedNote;
    }

    return undefined;
  },
};
