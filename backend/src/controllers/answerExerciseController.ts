import { Request, Response } from "express";
import { AnswerExerciseRepository } from "../repositories/AnswerExerciseRepository/AnswerExerciseRepository";
import { AnswerExercisePayload } from "../repositories/AnswerExerciseRepository/IAnswerExerciseRepository";
import { Document } from "mongoose";
import { ExerciseRepository } from "../repositories/ExerciseRepository/ExerciseRepository";
import { AnswerExercise } from "../models/AnswerExercise";
import { compileAndExecute } from "../helpers/functions";

const answerExerciseRepository = new AnswerExerciseRepository();
const exerciseRepository = new ExerciseRepository();

export const create = async (req: Request, res: Response) => {
    const answer: AnswerExercisePayload = req.body ;
    const user = req.user as Document;
    const idUser = user._id;
    const exerciseResult = await exerciseRepository.getOneExerciseById(answer.idExercise);

    const existedAnswerResult = await answerExerciseRepository.getOneAnswersByIdExerciseForOneUser(idUser, answer.idExercise);
    const fileName = exerciseResult.title.replace(/ /g, '_');
    const compilation = await compileAndExecute(answer.codeSource, fileName, answer.language);

    const newAnswer = await answerExerciseRepository.postOrUpdate(answer, idUser, existedAnswerResult, compilation);
    const result = {
        compilation, newAnswer
    }
    res.status(201).json(result);
};

export const getAll = async (req: Request, res: Response) => {
    // const user = req.user;
    // const {user} = req;
    const user = req.user as Document;
    const _id = user?._id;
    const answers = await answerExerciseRepository.getAllAnswersForOneUser(_id);
    res.json(answers);
};

export const updateOne = async (req: Request, res: Response) => {
    // const { _id } = req.params;
    // const answer: AnswerExercisePayload = req.body ;
    // const success = answerExerciseRepository.update(_id, answer);
    // res.json(success);
};

export const deleteOne = async (req: Request, res: Response) => {
    // const { _id } = req.params;
    // const success = answerExerciseRepository.delete(_id);
    // res.json(success);
};