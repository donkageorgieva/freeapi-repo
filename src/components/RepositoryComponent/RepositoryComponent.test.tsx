import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import RepositoryComponent from "./RepositoryComponent";
import { repoActions } from "../../services/state/store/features/repositorySlice";
import "@testing-library/jest-dom";
// Mock Redux store
const mockStore = configureStore([]);

// Create a mock store with an initial state
const initialState = {
  repository: {
    apis: [], // Provide initial state data here
    isLoading: false,
    errorMessage: null,
  },
};
const store = mockStore(initialState);

// Mock the getRepositoryAsync action
jest.mock("../../services/state/store/features/repositorySlice", () => ({
  ...jest.requireActual("../../services/state/store/features/repositorySlice"),
  repoActions: {
    getRepositoryAsync: jest.fn(),
  },
}));

describe("RepositoryComponent", () => {
  it("should render without errors", async () => {
    // Arrange
    // Mock the getRepositoryAsync action to resolve immediately with mock data
    //@ts-ignore
    repoActions.getRepositoryAsync.mockResolvedValue({});

    // Act
    render(
      <Provider store={store}>
        <RepositoryComponent />
      </Provider>
    );

    // Assert
    // Check that the loading text is displayed initially
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // You may need to wait for the asynchronous action to complete
    await act(async () => {
      // You might want to use waitFor or findByText to wait for specific content
      // Example: await screen.findByText("Expected Text");
    });

    // Now, you can assert that the loaded data is displayed
    // Replace "Expected Text" with the actual text you expect after loading.
    expect(screen.getByText("Expected Text")).toBeInTheDocument();

    // You can also check that error messages are not displayed
    expect(screen.queryByText("Error Message")).toBeNull();
  });
});
