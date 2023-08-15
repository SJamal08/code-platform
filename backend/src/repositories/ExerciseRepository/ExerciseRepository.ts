import { ExercisePayload, IExerciseRepository } from "./IExerciseRepository";
import { Exercise, IExercise } from "../../models/Exercise";
import { createTestFile, getExerciseFromModel } from "../../helpers/functions";

class ExerciseRepository implements IExerciseRepository {
    constructor() {
        
    }
    async post(exercise: ExercisePayload): Promise<boolean> {
        try {
            // Création de l'exercice dans la bdd
            const exo : IExercise = exercise;
            const newExercise = await new Exercise(exo).save();

            // Création des fichiers de test de l'exercice;
            const titleWithoutSpace = exercise.title.replace(/ /g, '_');
            const jsFileName = `./src/tests/javascript/${titleWithoutSpace}.js`;
            const pyFileName = `./src/tests/python/${titleWithoutSpace}.py`;
            createTestFile(jsFileName, exercise.codeTestJs);
            createTestFile(pyFileName, exercise.codeTestPy);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getAll(): Promise<typeof Exercise[]> {
        return await Exercise.find();
    }
    async getOneExerciseById(id: string): Promise<IExercise> {
        let model  = await Exercise.findById(id);
        if (model) {
            return getExerciseFromModel(model);
        }
        return null;
    }
    async update(_id: string, newExercise: ExercisePayload): Promise<boolean> {
        try {
            const updatedExercise = await Exercise.updateOne({_id}, newExercise);
            return true; 
        } catch (error) {
            return false;
        }
    }
    async delete(_id: string): Promise<boolean> {
        try {
            const deletedExercise = await Exercise.findByIdAndDelete(_id);
            return true; 
        } catch (error) {
            return false;
        }
    }
}

export { ExerciseRepository };