import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: { }
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;