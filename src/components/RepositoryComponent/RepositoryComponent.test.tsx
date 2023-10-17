import RepositoryComponent from "./RepositoryComponent";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/tests/global-store";

describe("RepositoryComponent", () => {
  it("should render without errors", async () => {
    const { getByTestId } = renderWithProviders(<RepositoryComponent />);

    expect(getByTestId("AdoptAPet")).toBeInTheDocument();
  });
});
