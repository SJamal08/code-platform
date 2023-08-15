import { AnswerExerciseRepository } from "../repositories/AnswerExerciseRepository/AnswerExerciseRepository";
import { AnswerPayload } from "../repositories/AnswerExerciseRepository/IAnswerExerciseRepository";

class AnswerExerciseController {
    private answerRepository: AnswerExerciseRepository;
    constructor() {
        this.answerRepository = new AnswerExerciseRepository();
    }
    
    async createAnswer(answer: AnswerPayload) {
        const data = await this.answerRepository.post(answer);
        return data;
    }

    async getAllAnswerForOneUser() {
        const answers = await this.answerRepository.getAll();
        return answers;
    }
}

export {AnswerExerciseController};