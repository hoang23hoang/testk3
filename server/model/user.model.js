import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    username: String,
    password: String
});

const userModel = mongoose.model('user',UserSchema);
export default userModel;