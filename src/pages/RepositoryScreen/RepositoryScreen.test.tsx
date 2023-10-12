import { render } from "@testing-library/react";
import RepositoryScreen from "./RepositoryScreen";
import "@testing-library/jest-dom";
describe("Page RepositoryScreen", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<RepositoryScreen />);
    expect(getByTestId("repo-screen")).toBeDefined();
  });
});
