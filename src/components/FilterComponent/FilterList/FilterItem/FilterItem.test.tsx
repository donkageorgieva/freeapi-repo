import { renderWithProviders } from "../../../../utils/__tests__/global-store";
import FilterItem from "./FilterItem";
import { configureStore } from "@reduxjs/toolkit";
import {
  initialState,
  repoSlice,
} from "../../../../services/state/store/features/repositorySlice";

// Create a custom store with the custom initial state
const customStore = configureStore({
  reducer: {
    repository: repoSlice.reducer,
  },
  preloadedState: {
    repository: {
      ...initialState,
      filter: "Animals",
    },
  },
});
describe("FilterItem ", () => {
  it("should render without errors", () => {
    const { getByTestId } = renderWithProviders(
      <FilterItem category="Animals" />,
      {
        store: customStore,
      }
    );
    expect(getByTestId("filter-item")).toBeInTheDocument();
  });
  it("should apply active class if filter is selected", () => {
    const { getByTestId } = renderWithProviders(
      <FilterItem category="Animals" />,
      {
        store: customStore,
      }
    );

    expect(getByTestId("filter-item")).toHaveClass("text-indigo-500");
  });
  it("should not apply active class if no filter is selected", () => {
    const { getByTestId } = renderWithProviders(
      <FilterItem category="Animals" />,
      {}
    );

    expect(getByTestId("filter-item")).not.toHaveClass("text-indigo-500");
  });
});
