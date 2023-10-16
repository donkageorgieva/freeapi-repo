import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import RepositoryComponent from "./RepositoryComponent";
import { store, useAppSelector } from "../../services/state/store/store";
import { repoActions } from "../../services/state/store/features/repositorySlice";
import { mockedApis } from "../../utils/mocked/mockedData/RepositoryComponent/mockedApis";

// Mock the asynchronous action
jest.mock("../../services/state/store/features/repositorySlice", () => ({
  ...jest.requireActual("../../services/state/store/features/repositorySlice"),
  getRepositoryAsync: jest.fn(), // Mock the async action
}));

// Mock the Redux store setup
jest.mock("../../services/state/store/store", () => ({
  ...jest.requireActual("../../services/state/store/store"),
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

describe("RepositoryComponent", () => {
  it("should render without errors", async () => {
    // Mock the behavior of useAppSelector to return mocked data
    (useAppSelector as jest.Mock).mockImplementation((selector) => {
      if (
        selector({
          repository: {
            apis: ["mockedApiData"],
            isLoading: false,
            errorMessage: "mockedErrorMessage",
          },
        })
      ) {
        return ["mockedApiData"];
      }
      return null;
    });

    // Mock the getRepositoryAsync action to resolve immediately
    (repoActions.getRepositoryAsync as unknown as jest.Mock).mockResolvedValue(
      mockedApis
    );

    render(
      <Provider store={store}>
        <RepositoryComponent />
      </Provider>
    );

    expect(screen.getByText("mockedApiData")).toBeInTheDocument();
    expect(screen.getByText("mockedErrorMessage")).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  });
});
