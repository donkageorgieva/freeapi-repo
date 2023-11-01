import { renderWithProviders } from "../../../../utils/tests/global-store";
import FilterItem from "./FilterItem";

import { initialState } from "../../../../services/state/store/features/repositorySlice";
import { createCustomStore } from "../../../../utils/tests/custom-store";

// Create a custom store with the custom initial state
const customStore = createCustomStore({
  repository: {
    ...initialState,
    filter: "Animals",
  },

  user: {
    email: "",
    username: "",
    token: "",
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
