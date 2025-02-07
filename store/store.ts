import { configureStore } from "@reduxjs/toolkit";
import ethKeysReducer from "./ethKeysSlice";

export const store = configureStore({
    reducer: {
        ethKeys: ethKeysReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
