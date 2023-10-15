import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFreeApi } from "../../../../interfaces/IFreeApi";
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
  reducers: {
    setRepository(state, action: PayloadAction<{ apis: IFreeApi[] }>) {
      state.apis = action.payload.apis;
    },
    filterRepository(state, action: PayloadAction<{ category: string }>) {
      state.apis = state.apis.filter(
        (api) => api.Category === action.payload.category
      );
    },
  },
});
