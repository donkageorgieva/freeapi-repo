import { render } from "@testing-library/react";
import Card from "./Card";

describe("UI Card Component", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <Card>
        <h1>Test</h1>
      </Card>
    );
    expect(getByText("Test")).toBeDefined();
  });
});
