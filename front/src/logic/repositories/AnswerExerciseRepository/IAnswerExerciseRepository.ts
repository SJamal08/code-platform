import { AnswerExercise } from "../../models/AnswerExercise";

export interface AnswerPayload {
    idExercise: string;
    language: string;
    codeSource: string;
}
interface IAnswerExerciseRepository {
    post(exercise: AnswerPayload): Promise<any>;
    getAll(): Promise<AnswerExercise[]>;
}

export type {IAnswerExerciseRepository}