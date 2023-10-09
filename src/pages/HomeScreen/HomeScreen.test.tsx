import { render } from "@testing-library/react";
import HomeScreen from "./HomeScreen";
import { MemoryRouter } from "react-router-dom";
describe("UI HomeScreen Component", () => {
  it("Should render without errors", () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>
    );
    expect(getByRole("main")).toBeDefined();
    expect(getByText("Login")).toBeDefined();
    expect(getByText("Continue as Guest")).toBeDefined();
  });
});
