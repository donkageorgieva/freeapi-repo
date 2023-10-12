import { render } from "@testing-library/react";
import RepositoryItem from "./RepositoryItem";
import { mockedApis } from "../../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
import "@testing-library/jest-dom";
describe("RepositoryItem", () => {
  it("should render without errors and format text", () => {
    const { getByText, getByTestId } = render(
      <RepositoryItem {...mockedApis[0]} />
    );
    expect(getByText("AdoptAPet")).toBeInTheDocument();
    expect(getByTestId("https")).toHaveTextContent("Yes");
    expect(getByTestId("cors")).toHaveTextContent("Yes");
  });
  it("should render a text for missing props", () => {
    const { getByText, getByTestId } = render(
      <RepositoryItem {...mockedApis[1]} />
    );
    expect(getByText("Axolotl")).toBeInTheDocument();
    expect(getByTestId("https")).toHaveTextContent("No");
    expect(getByTestId("cors")).toHaveTextContent("No");
  });
});
