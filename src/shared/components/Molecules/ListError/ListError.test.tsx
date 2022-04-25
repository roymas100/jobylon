import { fireEvent, render, screen } from "@testing-library/react";
import ListError from "./index";
import accessDeniedImg from "src/shared/images/access_denied.svg";
import Hooks from "../../../hooks";

const onClick = jest.fn();

describe("render empty list component", () => {
  it("should be able to render page", () => {
    render(<ListError />, { wrapper: Hooks });

    const container = screen.getByTestId("list-error");
    const message = screen.getByTestId("title");
    const img = screen.getByAltText("List error");

    expect(container).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe(accessDeniedImg);
    expect(message).toHaveTextContent("Something went wrong. Try again later.");
  });

  it("should be able to click", () => {
    render(<ListError onClick={onClick} />, { wrapper: Hooks });

    const button = screen.getByTestId("button");

    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
