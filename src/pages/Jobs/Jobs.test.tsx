import { render, screen } from "@testing-library/react";
import Hooks from "../../hooks";
import Jobs from "./index";

describe("Job page", () => {
  it("Should be able to render the job page", () => {
    render(<Jobs />, {
      wrapper: Hooks,
    });

    const filter = screen.getByTestId("job-filter");
    const menu = screen.getByTestId("menu");
    expect(filter).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
  });
});
