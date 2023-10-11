import { renderHook, act } from "@testing-library/react";
import { mockAxios } from "../../../utils/mocked/api/axiosMock";

import { usePublicApi } from "./usePublicApi";
import "@testing-library/jest-dom";
import { mockedApiResult } from "../../../utils/mocked/api/mockedApiResult";
describe("hooks usePublicApi", () => {
  it("should return result data and call fetchFunction", async () => {
    const callback = jest.fn();
    mockAxios
      .onGet(`${process.env.VITE_PUBLIC_API_BASE_URL}entries`)
      .reply(200, mockedApiResult);
    //@ts-ignore
    const { result } = renderHook(() => usePublicApi(callback, "entries"));
    const [fetchData] = result.current;

    await act(async () => {
      //@ts-ignore
      fetchData(); // Call fetchData to initiate the Axios request
      await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for the promise to resolve
    });

    const [, isLoading, errorMessage] = result.current;

    expect(callback).toHaveBeenCalledWith(mockedApiResult.entries);
    expect(isLoading).not.toBe(true);
    expect(errorMessage).not.toBe(true);
  });
});
