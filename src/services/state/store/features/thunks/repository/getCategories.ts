import { createAsyncThunk } from "@reduxjs/toolkit";
import { usePublicApi } from "../../../../../../hooks/api/usePublicApi/usePublicApi";

export const getCategoriesAsync = createAsyncThunk(
  "repository/getCategoriesAsync",
  async () => {
    const fetchData = usePublicApi("categories");
    const response = await fetchData();

    return response.data;
  }
);
