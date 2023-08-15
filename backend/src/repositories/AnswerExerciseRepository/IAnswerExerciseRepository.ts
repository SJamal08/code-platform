import { AnswerExercise, acceptance, codeBase, isValidated } from "src/models/AnswerExercise";

export interface AnswerExercisePayload {
        idExercise: string;
        language: string;
        codeSource: string;
}

export interface IAnswerExerciseRepository {
    postOrUpdate(answer: AnswerExercisePayload, idUser: string, existedAnswer: any, compilation: any): Promise<boolean>;
    getAllAnswersForOneUser(id: string): Promise<typeof AnswerExercise[]>;
    update(id: string, newAnswer: AnswerExercisePayload): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}