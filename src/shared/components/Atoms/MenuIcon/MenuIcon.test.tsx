import { render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import MenuIcon from "./index";

describe("MenuIcon component", () => {
  it("Should be able to render a menuIcon", () => {
    render(<MenuIcon onClick={() => {}} open={false} />, { wrapper: Hooks });

    const menuIcon = screen.getByTestId("menuIcon");
    expect(menuIcon).toBeInTheDocument();

    const up = screen.getByTestId("up");
    const middle = screen.getByTestId("middle");
    const down = screen.getByTestId("down");

    const styleUp = window.getComputedStyle(up);
    const styleMiddle = window.getComputedStyle(middle);
    const styleDown = window.getComputedStyle(down);

    expect(styleUp.width).toBe("25px");
    expect(styleMiddle.width).toBe("35px");
    expect(styleDown.width).toBe("25px");
  });

  it("should be able an opened menuIcon", () => {
    render(<MenuIcon onClick={() => {}} open />, { wrapper: Hooks });

    const up = screen.getByTestId("up");
    const middle = screen.getByTestId("middle");
    const down = screen.getByTestId("down");

    const styleUp = window.getComputedStyle(up);
    const styleMiddle = window.getComputedStyle(middle);
    const styleDown = window.getComputedStyle(down);

    expect(styleUp.transform).toBe("rotate(45deg) translate(8px,8px)");
    expect(styleMiddle.backgroundColor).toBe("transparent");
    expect(styleDown.transform).toBe("rotate(-45deg) translate(8px,-8px)");
  });
});
