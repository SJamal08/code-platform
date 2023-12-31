import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice  from "./features/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ExerciseSlice  from "./features/exerciseSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        exercises: ExerciseSlice,
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export type RootState = ReturnType<typeof store.getState>;