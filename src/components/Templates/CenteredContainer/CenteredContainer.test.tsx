import { render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import CenteredContainer from "./index";

describe("Centered container template page", () => {
  it("Should be able to render Centered container template", () => {
    render(<CenteredContainer />, {
      wrapper: Hooks,
    });

    const menu = screen.getByTestId("menu");
    const container = screen.getByTestId("body-container");

    expect(container).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
  });
});
