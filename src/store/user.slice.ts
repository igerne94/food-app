import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../helpers/.API";
import { LoginResponse } from "../interfaces/auth.interface";
import { UserProfile } from "../interfaces/user.interface";
import { RootState } from "./store";

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
    jwt: string | null;
}

export interface UserState {
    jwt: string | null;
    loginErrorMesssage?: string | null;
    registerErrorMesssage?: string | null;
    userProfile?: UserProfile;
}

const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
}

export const login = createAsyncThunk('user/login',
    async (params: { email: string, password: string }) => {
        try {
            const { data } = await axios.post<LoginResponse>(`${PREFIX}auth/login`, {
                email: params.email,
                password: params.password
            });
            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    }
);

export const userProfile = createAsyncThunk<UserProfile, void, { state: RootState }>('user/profile',
    async (_, thunkApi) => {
        const jwt = thunkApi.getState().user.jwt;
        const { data } = await axios.get<UserProfile>(`${PREFIX}user/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        return data;
    }
);

export const register = createAsyncThunk('user/register',
    async (params: { name: string, email: string, password: string }) => {
        try {
            const { data } = await axios.post<LoginResponse>(`${PREFIX}auth/register`, {
                name: params.name,
                email: params.email,
                password: params.password
            });
            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addJwt: (state, action) => {
            state.jwt = action.payload;
        },
        logout: (state) => {
            state.jwt = null;
        },
        clearLoginError: (state) => {
            state.loginErrorMesssage = undefined;
        },
        clearRegisterError: (state) => {
            state.registerErrorMesssage = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            if (!action.payload) {
                return;
            }
            state.jwt = action.payload.access_token;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loginErrorMesssage = action.error.message;
        });
        builder.addCase(userProfile.fulfilled, (state, action) => {
            state.userProfile = action.payload;
        });
         builder.addCase(register.fulfilled, (state, action) => {
            if (!action.payload) {
                return;
            }
            state.jwt = action.payload.access_token;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.registerErrorMesssage = action.error.message;
        });
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;