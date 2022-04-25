import { render, screen } from "@testing-library/react";
import Hooks from "../../hooks";
import PageNotFound from "./index";

describe("Job page", () => {
  it("Should be able to render the PageNotFound page", () => {
    render(<PageNotFound />, {
      wrapper: Hooks,
    });

    const page = screen.getByTestId("page-not-found");
    const menu = screen.getByTestId("page-not-found");
    expect(page).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
  });
});
