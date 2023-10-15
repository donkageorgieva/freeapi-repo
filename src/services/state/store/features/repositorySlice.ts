import { createSlice } from "@reduxjs/toolkit";
import { IFreeApi } from "../../../../interfaces/IFreeApi";
import { getRepositoryAsync } from "./thunks/repository/getRepository";
interface IRepositoryState {
  filter: string | null;
  apis: IFreeApi[];
}

const initialState: IRepositoryState = {
  filter: null,
  apis: [],
};

export const repoSlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepositoryAsync.fulfilled, (state, action) => {
      state.apis.push(action.payload.entries);
    });
  },
});

export default repoSlice.reducer;
export const repoActions = { ...repoSlice.actions, getRepositoryAsync };
