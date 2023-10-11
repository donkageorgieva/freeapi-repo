import axios from "axios";
import { useState } from "react";

export const usePublicApi = (
  callback: (result: []) => void,
  endPoint: string
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = () => {
    axios
      .get(`${process.env.VITE_PUBLIC_API_BASE_URL}${endPoint}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setIsLoading(true);
        return response;
      })
      .then((result: any) => {
        callback(result.data.entries);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  return [fetchData, isLoading, errorMessage];
};
