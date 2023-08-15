import mongoose, { Document } from "mongoose";

const {Schema} = mongoose;

export interface IUser extends Document {
    googleId: string;
    firstname: string;
    lastname: string;
    email: string;
    password?: string;
    isAdmin: boolean;
  }

const userSchema = new Schema<IUser>({
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
    isAdmin: {
        type: Boolean,
        required: true
    }
});

export const User = mongoose.model<IUser>("user", userSchema);