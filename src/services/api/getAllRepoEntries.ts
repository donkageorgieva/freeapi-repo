import axios from "axios";
import { IFreeApi } from "../../interfaces/IFreeApi";

export const getAllRepoEntries = (callback: (result: IFreeApi[]) => void) => {
  axios
    .get(`${process.env.VITE_PUBLIC_API_BASE_URL}entries`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => response)
    .then((result: any) => {
      callback(result.data.entries);
    });
};
