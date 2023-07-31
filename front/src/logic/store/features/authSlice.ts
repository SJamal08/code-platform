import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { RootState } from "../store";
import { AuthController } from "../../controllers/AuthController";

const authController = new AuthController();

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
        // login: (state, action: PayloadAction) => {
        //     state.user = { id: 1, googleId: "jamal" }
        //     console.log("login")
        // },
        loginWithGoogle: (state, action: PayloadAction) => {
            authController.loginWithGoogle();
            
            // state.user = { id: 1, googleId: "jamal" }
            // console.log("login")
        },
        // getCurrentUser: (state, action: PayloadAction)=>{
        //     authController.me().then(
        //         user => {
        //             console.log("get Current user", user)
        //             state.user = user
        //         }
        //     );
        // },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        // logout: async (state, action: PayloadAction) => {
        //     await authController.logout();
        //     state.user = null
        // },
    },
    extraReducers(builder) {
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
})

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async () => {
    const user = await authController.me();
    return user;
})
export const logout = createAsyncThunk('auth/logout', async () => {
    const user = await authController.logout();
    return user;
})
export default AuthSlice.reducer;
export const { loginWithGoogle } = AuthSlice.actions;
export const getUser = (state: RootState) => state.auth.user;