import HomeScreen from "./HomeScreen";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../utils/tests/global-store";
describe("UI HomeScreen Component", () => {
  it("Should render without errors", () => {
    const { getByRole, getByText } = renderWithProviders(
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>
    );
    expect(getByRole("main")).toBeDefined();
    expect(getByText("Login")).toBeDefined();
    expect(getByText("Continue as Guest")).toBeDefined();
  });
});
