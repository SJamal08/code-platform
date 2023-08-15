import { Request, Response } from "express";
import { ExerciseRepository } from "../repositories/ExerciseRepository/ExerciseRepository";
import { ExercisePayload } from "../repositories/ExerciseRepository/IExerciseRepository";

const exerciseRepository = new ExerciseRepository();
export const create = async (req: Request, res: Response) => {
    const exercise: ExercisePayload = req.body ;
    const success = await exerciseRepository.post(exercise);
    res.status(201).json(success);
};

export const getAll = async (req: Request, res: Response) => {
    const exercises = await exerciseRepository.getAll();
    res.json(exercises);
};

export const updateOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const exercise: ExercisePayload = req.body ;
    const success = exerciseRepository.update(_id, exercise);
    res.json(success);
};

export const deleteOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const success = exerciseRepository.delete(_id);
    res.json(success);
};