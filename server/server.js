import express, { json } from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
import filmRouter from './routes/handleFilm.route.js';
import cors from "cors";

dotenv.config();

const app = express();
const port = 3001;
app.use(cors());

// register: http://localhost:3001/auth/register
// login: http://localhost:3001/auth/login
//get all film: http://localhost:3001/film/all-films
//search film: http://localhost:3001/film/search-films
//add film: http://localhost:3001/film/add-film
//delete film: http://localhost:3001/film/delete-film/
//get one film: http://localhost:3001/film/one-film/
//sort film: http://localhost:3001/film/sort-film

app.use(express.json());
app.use('/auth',authRouter);
app.use('/film',filmRouter)
mongoose.connect('mongodb://127.0.0.1:27017/TestK3')
  .then(() => console.log('Connected!'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})