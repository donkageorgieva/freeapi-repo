import RepositoryScreen from "./RepositoryScreen";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/tests/global-store";
describe("Page RepositoryScreen", () => {
  it("should render without errors", () => {
    const { getByTestId } = renderWithProviders(<RepositoryScreen />);
    expect(getByTestId("repo-screen")).toBeDefined();
  });
});
