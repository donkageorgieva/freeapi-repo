import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
import { render } from "@testing-library/react";
import RepositoryComponent from "./RepositoryComponent";
import "@testing-library/jest-dom";
jest.mock("../../hooks/api/usePublicApi/usePublicApi");
describe("RepositoryComponent", () => {
  it("should render without errors", () => {
    //@ts-ignore
    usePublicApi.mockImplementation(() => {
      return [jest.fn(), true, ""];
    });
    const { getByTestId } = render(<RepositoryComponent />);
    expect(getByTestId("public-api-list")).toBeInTheDocument();
  });
});
