import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FilmSchema = new Schema({
  id: ObjectId,
  name: String,
  time: String, 
  year: Date,
  image: String,
  introduce: String
});

const filmModel = mongoose.model('film', FilmSchema);
export default filmModel;