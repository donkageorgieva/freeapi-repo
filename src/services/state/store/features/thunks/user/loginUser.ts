import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserLogin } from "../../../../../../interfaces/IUserLogin";
import api from "../../../../../api/api";

export const loginUser = createAsyncThunk(
  "user/loginrUser",
  async (user: IUserLogin) => {
    const response = await api.post("auth/signin", {
      ...user,
    });
    return response.data;
  }
);
