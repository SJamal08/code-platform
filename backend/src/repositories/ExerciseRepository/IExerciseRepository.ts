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

export interface IExerciseRepository {
    post(exercise: ExercisePayload): Promise<boolean>;
    getAll(): Promise<typeof Exercise[]>;
    update(id: string, newExercise: ExercisePayload): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}