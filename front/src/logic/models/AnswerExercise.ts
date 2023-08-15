import { acceptance, codeBase, isValidated } from "./Types";

export interface AnswerExercise {
    _id: number | string,
    idExercise: string;
    status: string;
    codeBase: codeBase;
    isValidated: isValidated;
    acceptance: acceptance;
}