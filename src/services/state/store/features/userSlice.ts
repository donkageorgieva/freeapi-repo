import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../../interfaces/IUserState";
import { registerUser } from "./thunks/user/registerUser";
import { loginUser } from "./thunks/user/loginUser";

const initialState: IUserState = {
  email: "",
  token: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.username = action.payload.username;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
  },
});

export default userSlice; // Note: Export the slice itself, not the reducer.
export const userActions = userSlice.actions; // Export actions as usual.
