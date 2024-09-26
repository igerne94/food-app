import { configureStore } from "@reduxjs/toolkit";
import userSlice, { JWT_PERSISTENT_STATE } from "./user.slice";
import { saveState } from "./storage";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
});

store.subscribe(() => {
    console.log(store.getState());
    saveState(JWT_PERSISTENT_STATE, { jwt: store.getState().user.jwt });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;