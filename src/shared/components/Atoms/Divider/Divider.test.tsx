import { render, screen } from "@testing-library/react";
import Divider from "./index";
import Hooks from "../../../hooks";

describe("Divider component", () => {
  it("Should be able to render a divider", () => {
    render(<Divider />, { wrapper: Hooks });

    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();

    const style = window.getComputedStyle(divider);
    expect(style.marginBottom).toBe("12px");
    expect(style.marginTop).toBe("12px");
  });
});
