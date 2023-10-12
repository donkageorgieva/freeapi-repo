import { render } from "@testing-library/react";
import SplitScreen from "./SplitScreen";
import MockedScreen from "../../../utils/mocked/ui/Screen/MockedScreen";
import MockedListItem from "../../../utils/mocked/ui/List/MockedListItem";
import "@testing-library/jest-dom";
describe("Layout SplitScreen", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <SplitScreen left={MockedScreen} right={MockedListItem} />
    );
    expect(getByText("Test")).toBeInTheDocument();
    expect(getByText("Mocked Screen")).toBeInTheDocument();
  });
});
