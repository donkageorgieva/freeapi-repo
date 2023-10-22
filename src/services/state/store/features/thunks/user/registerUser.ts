import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../../api/api";
import { INewUser } from "../../../../../../interfaces/INewUser";
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user: INewUser) => {
    const response = await api.post("auth/signup", {
      ...user,
    });
    return response.data;
  }
);
