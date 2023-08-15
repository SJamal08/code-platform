import { Router } from "express";
import * as answerExerciseController from "../controllers/answerExerciseController";

const answerExerciseRouter = Router();

answerExerciseRouter.post('/', answerExerciseController.create);

answerExerciseRouter.get('/all', answerExerciseController.getAll);

answerExerciseRouter.put('/:_id', answerExerciseController.updateOne);

answerExerciseRouter.delete('/:_id', answerExerciseController.deleteOne);

export default answerExerciseRouter;