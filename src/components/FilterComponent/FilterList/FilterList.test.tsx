// import { act } from "@testing-library/react";
import { mockedCategories } from "../../../utils/mocked/mockedData/FilterComponent/mockedCategories";

import { renderWithProviders } from "../../../utils/tests/global-store";
import FilterList from "./FilterList";

describe("FilterList Component", () => {
  it("should render without errors", () => {
    const { getByText } = renderWithProviders(
      <FilterList
        isLoading={false}
        errorMessage={null}
        data={mockedCategories.categories}
      />
    );
    expect(getByText("Animals")).toBeInTheDocument();
  });
});
