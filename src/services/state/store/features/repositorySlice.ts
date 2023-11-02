import { createSlice, isPending } from "@reduxjs/toolkit";
import { IFreeApi } from "../../../../interfaces/IFreeApi";
import { getRepositoryAsync } from "./thunks/repository/getRepository";
import {
  getByCategoryAsync,
  getCategoriesAsync,
} from "./thunks/repository/getCategories";
import { IRepositoryState } from "../../../../interfaces/IRepositoryState";

export const initialState: IRepositoryState = {
  filter: null,
  apis: [],
  errorMessage: null,
  isLoading: false,
  categories: [],
};

export const repoSlice = createSlice({
  name: "repository",
  initialState,
  reducers: {
    setApisFromStorage(state, action) {
      state.apis = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRepositoryAsync.fulfilled, (state, action) => {
      const entries = [...action.payload.entries];
      console.log(action.payload);
      state.filter = null;
      state.apis = entries;
      window.sessionStorage.setItem("repository", JSON.stringify(entries));
      state.isLoading = false;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      state.categories = [...action.payload.categories];

      state.isLoading = false;
    });
    builder.addCase(getByCategoryAsync.fulfilled, (state, action) => {
      state.filter = action.payload.category;
      state.apis = [
        ...action.payload.apis.entries.filter(
          (api: IFreeApi) => api.Category === action.payload.category
        ),
      ];
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
  getByCategoryAsync,
};
