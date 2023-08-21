import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ExerciseController } from "../../controllers/ExerciseController";
import { RootState } from "../store";
import { AnswerExerciseController } from "../../controllers/AnswerExerciseController";
import { AnswerPayload } from "../../repositories/AnswerExerciseRepository/IAnswerExerciseRepository";
import { ExerciseAndAnswer } from "../../models/Types";

export const exerciseController = new ExerciseController();
export const answerExerciseController = new AnswerExerciseController();

interface ExerciseState {
    coupleList: ExerciseAndAnswer[];
}

const initialState: ExerciseState = {
    coupleList: [],
}

export const ExerciseSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        setCoupleList: (state, action: PayloadAction<ExerciseAndAnswer[]>) => {
            state.coupleList = action.payload;
        },
        setCoupleInList: (state, action: PayloadAction<ExerciseAndAnswer>) => {
            const index = state.coupleList.findIndex(couple => couple.exercise = action.payload.exercise);
            state.coupleList[index] = action.payload;
        }
    },
})

export default ExerciseSlice.reducer;
export const { setCoupleList, setCoupleInList } = ExerciseSlice.actions;
export const getCoupleList = (state: RootState) => state.exercises.coupleList;
export const getCoupleByExoId = (coupleList: ExerciseAndAnswer[], id: string) => coupleList.find(couple => couple.exercise._id === id);
