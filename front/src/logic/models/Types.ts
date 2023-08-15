import { AnswerExercise } from "./AnswerExercise"
import { Exercise } from "./Exercise"

export type codeBase = {
    js: string;
    py: string;
}

export type isValidated = {
    js: boolean;
    py: boolean;
}

export type acceptance = {
    js: number;
    py: number;
}

export type ExerciseAndAnswer = {
    exercise: Exercise,
    answer?: AnswerExercise
}