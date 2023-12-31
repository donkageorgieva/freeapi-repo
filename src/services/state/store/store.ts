import { configureStore } from "@reduxjs/toolkit";
import { repoSlice } from "./features/repositorySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    repository: repoSlice.reducer,
    user: userSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
