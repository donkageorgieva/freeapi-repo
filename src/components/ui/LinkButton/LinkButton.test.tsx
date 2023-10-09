import { render } from "@testing-library/react";
import LinkButton from "./LinkButton";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
const MockedLinkButtonImplementation = () => {
  return <LinkButton to="test">My text</LinkButton>;
};
describe("UI Link Button", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MockedLinkButtonImplementation />
      </MemoryRouter>
    );
    expect(getByText("My text")).toBeDefined();
  });
});
