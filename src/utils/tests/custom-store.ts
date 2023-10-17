import { configureStore } from "@reduxjs/toolkit";
import { repoSlice } from "../../services/state/store/features/repositorySlice";

export const createCustomStore = (state: any) => {
  return configureStore({
    reducer: {
      repository: repoSlice.reducer,
    },
    preloadedState: {
      repository: {
        ...state,
      },
    },
  });
};
