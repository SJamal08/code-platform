import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
});

export const User = mongoose.model("user", userSchema);