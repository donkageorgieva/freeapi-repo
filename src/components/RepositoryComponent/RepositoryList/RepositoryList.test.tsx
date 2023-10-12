import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import RepositoryList from "./RepositoryList";
import { mockedApis } from "../../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
describe("RepositoryComponent", () => {
  it("should render populated list of apis without errors, when not loading and no error present", () => {
    const { getByText, getByTestId, queryByText } = render(
      <RepositoryList data={mockedApis} isLoading={false} errorMessage={null} />
    );
    expect(queryByText("Loading")).toBeNull;
    expect(queryByText("Error")).toBeNull;
    expect(getByTestId("list")).toBeInTheDocument();
    expect(getByText("AdoptAPet")).toBeInTheDocument();
  });
  it("should render a Loading text if isLoading is true loading", () => {
    const { getByTestId, queryByText } = render(
      <RepositoryList data={null} isLoading={true} errorMessage={null} />
    );
    expect(queryByText("Loading")).toBeInTheDocument();
    expect(queryByText("Error")).toBeNull;
    expect(getByTestId("list")).toBeInTheDocument();
    expect(queryByText("AdoptAPet")).toBeNull();
  });
  it("should render an error message upon error ", () => {
    const { queryByText } = render(
      <RepositoryList data={null} isLoading={false} errorMessage={"ERROR"} />
    );
    expect(queryByText("Loading")).toBeNull;
    expect(queryByText("ERROR")).toBeInTheDocument;
    expect(queryByText("AdoptAPet")).toBeNull();
  });
});
