import express from 'express';
import * as notesController from '../controllers/notesController';
import { validateNote } from '../middleware/validationMiddleware';

const router = express.Router();

router.get('/', notesController.getAllNotes);
router.get('/:id', notesController.getNoteById);
router.post('/', validateNote, notesController.createNote);
router.put('/:id', validateNote, notesController.updateNote);
router.delete('/:id', notesController.deleteNote);

export default router;