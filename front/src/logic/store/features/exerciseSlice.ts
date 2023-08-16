import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ExerciseController } from "../../controllers/ExerciseController";
import { Exercise } from "../../models/Exercise";
import { ExercisePayload } from "../../repositories/ExerciseRepository/IExerciseRepository";
import { RootState } from "../store";
import { AnswerExercise } from "../../models/AnswerExercise";
import { AnswerExerciseController } from "../../controllers/AnswerExerciseController";
import { AnswerPayload } from "../../repositories/AnswerExerciseRepository/IAnswerExerciseRepository";
import { ExerciseAndAnswer } from "../../models/Types";

export const exerciseController = new ExerciseController();
export const answerExerciseController = new AnswerExerciseController();

interface ExerciseState {
    // exercisesList: Exercise[];
    // answerList: AnswerExercise[];
    coupleList: ExerciseAndAnswer[];
}

const initialState: ExerciseState = {
    // exercisesList: [],
    // answerList: [],
    coupleList: [],
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
        .addCase(getAllCouples.fulfilled, (state, action) => {
            state.coupleList = action.payload;
        })
    }
})

// export const getAllExercises = createAsyncThunk('exercise/getAllExercises', async () =>{
//     const exercises = await exerciseController.getAllExercise();
//     return exercises;
// });
// export const getAllAnswers = createAsyncThunk('answer/getAllAnswers', async () =>{
//     const answers = await answerExerciseController.getAllAnswerForOneUser();
//     return answers;
// });

export const getAllCouples = createAsyncThunk('couple/getAll', async () =>{
    const exercises = await exerciseController.getAllExercise();
    const answers = await answerExerciseController.getAllAnswerForOneUser();
    const coupleList: ExerciseAndAnswer[] = [];
    exercises.forEach(exercise => {
        const answer = answers.find( answer => answer.idExercise === exercise._id);
        const couple: ExerciseAndAnswer = {
          exercise, answer
        };
        coupleList.push(couple);
      });
      console.log(coupleList)
    return coupleList;
});

export const createExercise = createAsyncThunk('exercise/createExercise', async (exercise: ExercisePayload) =>{
    await exerciseController.createExercise(exercise);
});


export const createAnswer = createAsyncThunk('answer/createAnswer', async (answer: AnswerPayload) =>{
    await answerExerciseController.createAnswer(answer);
});

export default ExerciseSlice.reducer;
export const getCoupleList = (state: RootState) => state.exercises.coupleList;
// export const getAnswers = (state: RootState) => state.exercises.answerList;
// export const getCoupleByExoId = (state: RootState, id: string) => state.exercises.coupleList.find(exerciseAndAnswer => exerciseAndAnswer.exercise._id === id);
export const getCoupleByExoId = (coupleList: ExerciseAndAnswer[], id: string) => coupleList.find(couple => couple.exercise._id === id);
// export const getAnswerById = (state: RootState, id: string) => state.exercises.answerList.find(answer => answer.idExercise === id);
