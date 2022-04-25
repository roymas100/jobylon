import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./index";
import Hooks from "../../../hooks";

const onChange = jest.fn();

describe("Checkbox component", () => {
  it("Should be able to render a checkbox", () => {
    render(<Checkbox label="test" name="checkbox-name" onChange={() => {}} />, {
      wrapper: Hooks,
    });

    const checkbox = screen.getByLabelText("test");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.getAttribute("id")).toBe("checkbox-name");
  });

  it("should be able to call onChange", () => {
    render(<Checkbox label="test" name="checkbox-name" onChange={onChange} />, {
      wrapper: Hooks,
    });

    const checkbox = screen.getByTestId("checkbox");

    fireEvent.click(checkbox);
    expect(onChange).toBeCalled();
  });
});
