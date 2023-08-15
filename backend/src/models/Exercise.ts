import mongoose, { Document } from "mongoose";

export interface IExercise {
    title: string;
    description: string;
    difficulty: string;
    codeBaseJs: string;
    codeBasePy: string;
}

const {Schema} = mongoose;

const ExerciseSchema = new Schema<IExercise>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    codeBaseJs: {
        type: String,
        required: true
    },
    codeBasePy: {
        type: String,
        required: true
    },
});

export const Exercise = mongoose.model("exercise", ExerciseSchema);