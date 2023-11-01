import { configureStore } from "@reduxjs/toolkit";
import { repoSlice } from "../../services/state/store/features/repositorySlice";
import userSlice from "../../services/state/store/features/userSlice";

export const createCustomStore = (state: any) => {
  return configureStore({
    reducer: {
      repository: repoSlice.reducer,
      user: userSlice.reducer,
    },
    preloadedState: {
      repository: {
        ...state.repository,
      },
      user: {
        ...state.user,
      },
    },
  });
};
