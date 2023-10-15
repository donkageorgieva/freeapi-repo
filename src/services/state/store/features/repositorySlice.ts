import { createSlice } from "@reduxjs/toolkit";
import { IFreeApi } from "../../../../interfaces/IFreeApi";
import { getRepositoryAsync } from "./thunks/repository/getRepository";
interface IRepositoryState {
  filter: string | null;
  apis: IFreeApi[];
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: IRepositoryState = {
  filter: null,
  apis: [],
  errorMessage: null,
  isLoading: false,
};

export const repoSlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepositoryAsync.fulfilled, (state, action) => {
      state.apis = [...action.payload.entries];
      // state.apis.push(action.payload.entries);
      state.isLoading = false;
    });
    builder.addCase(getRepositoryAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRepositoryAsync.rejected, (state, action) => {
      state.errorMessage = action.error.message
        ? action.error.message
        : "Unknwon Error";
    });
  },
});

export default repoSlice.reducer;
export const repoActions = { ...repoSlice.actions, getRepositoryAsync };
