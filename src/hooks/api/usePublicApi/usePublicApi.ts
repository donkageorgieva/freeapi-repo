import axios from "axios";

export const usePublicApi = (endPoint: string) => {
  const fetchData = () => {
    return axios.get(
      `${process.env.VITE_PUBLIC_API_BASE_URL}${endPoint}.json`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
  };

  return fetchData;
};
