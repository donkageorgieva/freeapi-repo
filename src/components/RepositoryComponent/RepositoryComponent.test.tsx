import { render } from "@testing-library/react";
import RepositoryComponent from "./RepositoryComponent";
import { mockedApis } from "../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
import "@testing-library/jest-dom";
describe("RepositoryComponent", () => {
  it("Should render without errors", () => {
    const { getByText } = render(<RepositoryComponent />);
    jest.mock("../../services/api/getAllRepoEntries", () => {
      return {
        getAllRepoEntries: jest.fn(() => Promise.resolve(mockedApis)),
      };
    });
    expect(getByText("Public APIs")).toBeDefined();
  });
  it("Should render a paragraph if no data is present", () => {
    const { getByText } = render(<RepositoryComponent />);
    jest.mock("../../services/api/getAllRepoEntries", () => {
      return {
        getAllRepoEntries: jest.fn(() => Promise.resolve([])),
      };
    });
    expect(getByText("No data")).toBeDefined();
  });
});
