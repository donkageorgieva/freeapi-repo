import { createSlice, isPending } from "@reduxjs/toolkit";
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
    setApisFromStorage(state) {
      const apis = window.sessionStorage.getItem("repository");
      if (!apis) return;
      state.apis = JSON.parse(apis);
    },
    setCategoriesFromStorage(state) {
      const categories = window.sessionStorage.getItem("categories");
      if (!categories) return;
      state.categories = JSON.parse(categories);
    },
    setFilterFromStorage(state, action) {
      const filteredItems = window.sessionStorage.getItem(action.payload);
      const selectedFilter = window.sessionStorage.getItem("filter");
      if (!filteredItems || !selectedFilter) return;
      state.filter = selectedFilter;
      state.apis = JSON.parse(filteredItems);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRepositoryAsync.fulfilled, (state, action) => {
      const entries = [...action.payload.entries];
      state.filter = null;
      state.apis = entries;
      window.sessionStorage.setItem("repository", JSON.stringify(entries));
      state.isLoading = false;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      const categories = [...action.payload.categories];
      state.categories = categories;
      window.sessionStorage.setItem("categories", JSON.stringify(categories));

      state.isLoading = false;
    });
    builder.addCase(getByCategoryAsync.fulfilled, (state, action) => {
      const filteredApis = action.payload.apis;
      state.filter = action.payload.category;
      state.apis = filteredApis;
      window.sessionStorage.setItem("filter", action.payload.category);
      window.sessionStorage.setItem(
        action.payload.category,
        JSON.stringify(filteredApis)
      );
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
