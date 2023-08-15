import { Exercise } from "../../models/Exercise";

export interface ExercisePayload {
    title: string;
    description: string;
    difficulty: string;
    codeBaseJs: string;
    codeBasePy: string;
    codeTestJs: string;
    codeTestPy: string;
}
interface IExerciseRepository {
    post(exercise: ExercisePayload): Promise<Boolean>;
    getAll(): Promise<Exercise[]>;
}

export type {IExerciseRepository}