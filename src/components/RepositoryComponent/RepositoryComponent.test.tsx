import { render, waitFor } from "@testing-library/react";
import RepositoryComponent from "./RepositoryComponent";
import { mockedApis } from "../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
import "@testing-library/jest-dom";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
jest.mock("../../hooks/api/usePublicApi/usePublicApi");
describe("RepositoryComponent", () => {
  it("Should render without errors", () => {
    //@ts-ignore
    usePublicApi.mockImplementation(() => {
      return [jest.fn(), true, null];
    });

    const { getByText } = render(<RepositoryComponent />);

    expect(getByText("Loading")).toBeInTheDocument();
  });
  it("Should render a paragraph if no data is present", async () => {
    const fetchDataMock = jest.fn((callback) => callback(mockedApis));
    //@ts-ignore
    usePublicApi.mockReturnValue([
      fetchDataMock, // Simulate calling the callback with mocked data
      false,
      null,
    ]);
    //@ts-ignore
    const { getByText, getByTestId } = render(<RepositoryComponent />);

    //wait for data to be fetched and rendered
    await waitFor(() => {
      const listElement = getByTestId("list");
      expect(listElement).toBeInTheDocument();
      mockedApis.forEach((api) => {
        const apiElement = getByText(api.API);

        expect(apiElement).toBeInTheDocument();
      });
    });
  });
});
