import { render, screen } from "@testing-library/react";
import Avatar, { AvatarType } from "./index";
import companyIcon from "../../../images/company-icon.png";
import jobylon from "../../../images/jobylon-logo-2.png";
import Hooks from "../../../hooks";

describe("Avatar component", () => {
  it("should be able to render an avatar", () => {
    render(<Avatar name="avatar-name" />, { wrapper: Hooks });

    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("should be able to render a avatar with company icon", () => {
    render(<Avatar name="avatar-name" />, { wrapper: Hooks });

    const img = screen.getByAltText("avatar-name");

    expect(img.getAttribute("src")).toBe(companyIcon);
  });

  it("should be able to render a avatar with diffent image", () => {
    render(<Avatar name="avatar-name" src={jobylon} />, { wrapper: Hooks });

    const img = screen.getByAltText("avatar-name");

    expect(img.getAttribute("src")).toBe(jobylon);
  });

  it("should be able to render a circle avatar", () => {
    render(<Avatar name="avatar-name" type={AvatarType.circle} />, {
      wrapper: Hooks,
    });

    const avatar = screen.getByTestId("avatar");

    const style = window.getComputedStyle(avatar);

    expect(style.borderRadius).toBe("100%");
  });

  it("should be able to render a rounded avatar", () => {
    render(<Avatar name="avatar-name" type={AvatarType.rounded} />, {
      wrapper: Hooks,
    });

    const avatar = screen.getByTestId("avatar");

    const style = window.getComputedStyle(avatar);

    expect(style.borderRadius).toBe("6px");
  });

  it("should be able to render a square avatar", () => {
    render(<Avatar name="avatar-name" type={AvatarType.square} />, {
      wrapper: Hooks,
    });

    const avatar = screen.getByTestId("avatar");

    const style = window.getComputedStyle(avatar);

    expect(style.borderRadius).toBe("0");
  });
});
