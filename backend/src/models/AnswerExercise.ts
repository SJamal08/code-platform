import mongoose, { Document } from "mongoose";

export type codeBase = {
    js?: string;
    py?: string;
}

export type isValidated = {
    js?: boolean;
    py?: boolean;
}

export type acceptance = {
    js?: number;
    py?: number;
}

export interface IAnswerExercise {
    idExercise: string;
    idUser: string;
    status: string;
    codeBase: codeBase;
    isValidated: isValidated;
    acceptance: acceptance;
}

const AnswerExerciseSchema = new mongoose.Schema<IAnswerExercise>({
    idExercise: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    codeBase: {
        type: Object,
        required: true
    },
    isValidated: {
        type: Object,
        required: true
    },
    acceptance: {
        type: Object,
        required: false
    },
})

export const AnswerExercise = mongoose.model("AnswerExercise", AnswerExerciseSchema);


