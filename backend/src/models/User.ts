import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
});

export const User = mongoose.model("user", userSchema);