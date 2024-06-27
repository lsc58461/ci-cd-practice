import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Page", () => {
  it("should render", () => {
    render(<Page />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
