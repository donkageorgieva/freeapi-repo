import { createAsyncThunk } from "@reduxjs/toolkit";
import { usePublicApi } from "../../../../../../hooks/api/usePublicApi/usePublicApi";

export const getRepositoryAsync = createAsyncThunk(
  "repository/getRepository",
  async () => {
    const fetchData = usePublicApi("entries");
    const response = await fetchData();
    return response.data;
  }
);
