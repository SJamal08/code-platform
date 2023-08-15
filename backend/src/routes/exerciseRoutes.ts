import { Router } from "express";
import * as exerciseController from "../controllers/exerciseController";

const exerciseRouter = Router();

exerciseRouter.post('/', exerciseController.create);

exerciseRouter.get('/all', exerciseController.getAll);

exerciseRouter.put('/:_id', exerciseController.updateOne);

exerciseRouter.delete('/:_id', exerciseController.deleteOne);

export default exerciseRouter;