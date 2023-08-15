import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ExerciseController } from "../../controllers/ExerciseController";
import { Exercise } from "../../models/Exercise";
import { ExercisePayload } from "../../repositories/ExerciseRepository/IExerciseRepository";
import { RootState } from "../store";
import { AnswerExercise } from "../../models/AnswerExercise";
import { AnswerExerciseController } from "../../controllers/AnswerExerciseController";
import { AnswerPayload } from "../../repositories/AnswerExerciseRepository/IAnswerExerciseRepository";

export const exerciseController = new ExerciseController();
export const answerExerciseController = new AnswerExerciseController();

interface ExerciseState {
    exercisesList: Exercise[];
    answerList: AnswerExercise[];
}

const initialState: ExerciseState = {
    exercisesList: [],
    answerList: [],
}

export const ExerciseSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        setExercisesList: (state, action: PayloadAction) => {

        },
    },
    extraReducers(builder) {
        builder
        .addCase(getAllExercises.fulfilled, (state, action) => {
            state.exercisesList = action.payload;
        })
        .addCase(getAllAnswers.fulfilled, (state, action) => {
            state.answerList = action.payload;
        })
    }
})

export const getAllExercises = createAsyncThunk('exercise/getAllExercises', async () =>{
    const exercises = await exerciseController.getAllExercise();
    return exercises;
});

export const createExercise = createAsyncThunk('exercise/createExercise', async (exercise: ExercisePayload) =>{
    await exerciseController.createExercise(exercise);
});

export const getAllAnswers = createAsyncThunk('answer/getAllAnswers', async () =>{
    const answers = await answerExerciseController.getAllAnswerForOneUser();
    return answers;
});

export const createAnswer = createAsyncThunk('answer/createAnswer', async (answer: AnswerPayload) =>{
    await answerExerciseController.createAnswer(answer);
});

export default ExerciseSlice.reducer;
export const getExercises = (state: RootState) => state.exercises.exercisesList;
export const getAnswers = (state: RootState) => state.exercises.answerList;
export const getExerciseById = (state: RootState, id: string) => state.exercises.exercisesList.find(exercise => exercise._id === id);
export const getAnswerById = (state: RootState, id: string) => state.exercises.answerList.find(answer => answer.idExercise === id);
