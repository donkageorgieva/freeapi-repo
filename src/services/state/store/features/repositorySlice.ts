import { createSlice, isPending } from "@reduxjs/toolkit";
import { IFreeApi } from "../../../../interfaces/IFreeApi";
import { getRepositoryAsync } from "./thunks/repository/getRepository";
import { getCategoriesAsync } from "./thunks/repository/getCategories";
interface IRepositoryState {
  filter: string | null;
  apis: IFreeApi[];
  isLoading: boolean;
  errorMessage: string | null;
  categories: string[];
}

const initialState: IRepositoryState = {
  filter: null,
  apis: [],
  errorMessage: null,
  isLoading: false,
  categories: [],
};

export const repoSlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepositoryAsync.fulfilled, (state, action) => {
      state.apis = [...action.payload.entries];

      state.isLoading = false;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      state.categories = [...action.payload.categories];

      state.isLoading = false;
    });
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.errorMessage = action.error.message
          ? action.error.message
          : "Unknwon Error";
      }
    );
  },
});

export default repoSlice.reducer;
export const repoActions = {
  ...repoSlice.actions,
  getRepositoryAsync,
  getCategoriesAsync,
};