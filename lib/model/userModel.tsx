import { Schema, model, models } from "mongoose";
const userModel = new Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    status: { type: Number, },
    del: { type: Number, }
})
const User = models.User || model('User', userModel);
export default User