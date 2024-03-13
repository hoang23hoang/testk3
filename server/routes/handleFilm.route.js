import express from 'express';
import { deleteFilm, updateFilm, getFilm, getOneFilm, addFilm } from '../controller/handleFilm.controller.js';
import { searchFilm } from '../controller/searchFilm.controller.js';
import { sortFilm } from '../controller/sortiFilm.controller.js';

const filmRouter = express.Router();

filmRouter.get('/all-films', getFilm);
filmRouter.get('/one-films/:id', getOneFilm);
filmRouter.post('/add-film', addFilm);
filmRouter.delete('/delete-film/:id', deleteFilm);
filmRouter.patch('/update-film/:id', updateFilm);
filmRouter.get('/search-films',searchFilm);
filmRouter.get('/sort-film',sortFilm);

export default filmRouter;
