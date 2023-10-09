import { render } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";
describe("UI Card Component", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <Card>
        <h1>Test</h1>
      </Card>
    );
    expect(getByText("Test")).toBeDefined();
  });
  it("should be an article html element with applied tailwind classes", () => {
    const expectedClasses = "p-4 bg-white rounded shadow-lg";
    const { getByRole } = render(
      <Card>
        <h1>Test</h1>
      </Card>
    );
    expect(getByRole("article")).toBeDefined();

    expect(getByRole("article")).toHaveClass(expectedClasses);
  });
});
