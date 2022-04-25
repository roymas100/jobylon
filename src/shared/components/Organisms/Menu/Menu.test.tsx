/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen } from "@testing-library/react";
import Menu from "./index";
import Hooks from "../../../hooks";

describe("Menu component", () => {
  it("Should be able to render a menu", () => {
    render(<Menu />, { wrapper: Hooks });

    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();

    const menuStyle = window.getComputedStyle(menu);
    expect(menuStyle.position).toBe("fixed");

    const menuButton = screen.getByTestId("menuIcon");
    const menuLogo = screen.getByTestId("menu-logo");
    const menuLinks = screen.getByTestId("opened-menu-links");

    expect(menuButton).toBeInTheDocument();
    expect(menuLogo).toBeInTheDocument();
    expect(menuLinks).toBeInTheDocument();
  });
});
