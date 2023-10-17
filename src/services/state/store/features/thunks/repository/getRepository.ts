import { createAsyncThunk } from "@reduxjs/toolkit";
import { usePublicApi } from "../../../../../../hooks/api/usePublicApi/usePublicApi";

export const getRepositoryAsync = createAsyncThunk(
  "repository/getRepositoryAsync",
  async () => {
    const fetchData = usePublicApi("");
    const response = await fetchData();
    return response.data;
  }
);
