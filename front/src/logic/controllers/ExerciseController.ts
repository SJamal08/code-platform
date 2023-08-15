import { ExerciseRepository } from "../repositories/ExerciseRepository/ExerciseRepository";
import { ExercisePayload } from "../repositories/ExerciseRepository/IExerciseRepository";

class ExerciseController {
    private exerciseRepository: ExerciseRepository;
    constructor() {
        this.exerciseRepository = new ExerciseRepository();
    }
    
    async createExercise(exercise: ExercisePayload) {
        await this.exerciseRepository.post(exercise);
    }

    async getAllExercise() {
        const exercises = await this.exerciseRepository.getAll();
        return exercises;
    }
}

export {ExerciseController}



