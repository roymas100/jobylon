import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";
import Hooks from "../../../hooks";

const onClick = jest.fn();

describe("Button component", () => {
  it("Should be able to render a button", () => {
    render(<Button onClick={onClick} />, { wrapper: Hooks });

    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("should be able to call onClick function", () => {
    render(<Button onClick={onClick} />, { wrapper: Hooks });

    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
