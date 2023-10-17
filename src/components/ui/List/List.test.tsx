import { render } from "@testing-library/react";
import List from "./List";
import { mockedApis } from "../../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
import MockedListItem from "../../../utils/mocked/ui/List/MockedListItem";

import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
describe("UI List Component", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <List
        data={mockedApis}
        keyPropertyName={["Link", "API"]}
        itemComponent={MockedListItem}
      />
    );
    expect(getByText("AdoptAPet")).toBeDefined();
  });
  it("should set active item classes on click", () => {
    const clickedFn = jest.fn();
    const { getByTestId } = render(
      <List
        data={mockedApis}
        keyPropertyName={["Link", "API"]}
        itemComponent={MockedListItem}
        handleClick={clickedFn}
      />
    );
    const firstListItem = getByTestId("AdoptAPet");
    act(() => {
      firstListItem.click();
    });

    expect(clickedFn).toHaveBeenCalledTimes(1);
  });
});
