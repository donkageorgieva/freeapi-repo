import { act } from "react-dom/test-utils";
import { renderWithProviders } from "../../utils/tests/global-store";
import FilterComponent from "./FilterComponent";

describe("Filter Component", () => {
  it("should render without errors", () => {
    const { getByTestId } = renderWithProviders(<FilterComponent />);
    expect(getByTestId("filter-list")).toBeInTheDocument();
  });
  it("should add height class on expand button click", () => {
    const { getByTestId } = renderWithProviders(<FilterComponent />);
    const filterContainer = getByTestId("filter-card");
    const expandableFilter = getByTestId("expandable-filter");
    expect(filterContainer).toHaveClass("h-12");

    act(() => {
      expandableFilter.click();
    });
    expect(filterContainer).toHaveClass("h-fit");
  });
});
