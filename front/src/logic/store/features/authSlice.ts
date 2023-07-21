import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { log } from "console";
import { RootState } from "../store";

interface AuthState {
    user: User | null;
    accessToken: string;
}

const initialState: AuthState = {
    user: null,
    accessToken: "",
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction) => {
            state.user = { id: 1, googleId: "jamal" }
            console.log("login")
        },
        logout: () => {

        },
    },
})

export default AuthSlice.reducer;
export const { login } = AuthSlice.actions;
export const getUser = (state: RootState) => state.auth.user;