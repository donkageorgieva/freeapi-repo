// import { act } from "@testing-library/react";
import { act } from "@testing-library/react";
import { mockedCategories } from "../../../utils/mocked/mockedData/FilterComponent/mockedCategories";

import { renderWithProviders } from "../../../utils/tests/global-store";
import FilterList from "./FilterList";

describe("FilterList Component", () => {
  it("should render without errors", () => {
    const { getByText } = renderWithProviders(
      <FilterList
        toggleExpand={jest.fn()}
        isLoading={false}
        errorMessage={null}
        data={mockedCategories.categories}
      />
    );
    expect(getByText("Animals")).toBeInTheDocument();
  });
  it("should change chevron classes on expand/collapse", () => {
    const { getByTestId } = renderWithProviders(
      <FilterList
        toggleExpand={jest.fn()}
        isLoading={false}
        errorMessage={null}
        data={mockedCategories.categories}
      />
    );
    const expandable = getByTestId("expandable-filter");
    expect(getByTestId("chevron-button")).toHaveClass("rotate-0");
    act(() => {
      expandable.click();
    });
    expect(getByTestId("chevron-button")).toHaveClass("rotate-180");
  });
});
