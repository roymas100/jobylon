import { fireEvent, render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import Modal from "./index";

const onClose = jest.fn();

describe("Modal component", () => {
  it("Should be able to render a closed modal", () => {
    render(<Modal onClose={() => {}} show={false} />, { wrapper: Hooks });

    const modalcontainer = screen.getByTestId("modal-container");
    expect(modalcontainer).toBeInTheDocument();

    const containerStyle = window.getComputedStyle(modalcontainer);

    expect(containerStyle.visibility).toBe("hidden");

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    const style = window.getComputedStyle(modal);

    expect(style.transform).toBe("translateX(480px)");
  });

  it("Should be able to render an open modal", () => {
    render(<Modal onClose={() => {}} show />, { wrapper: Hooks });

    const modalcontainer = screen.getByTestId("modal-container");
    expect(modalcontainer).toBeInTheDocument();

    const containerStyle = window.getComputedStyle(modalcontainer);

    expect(containerStyle.visibility).toBe("visible");

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    const style = window.getComputedStyle(modal);

    expect(style.transform).toBeFalsy();
  });

  it("should close modal when click button", () => {
    render(<Modal onClose={onClose} show />, { wrapper: Hooks });

    const modal = screen.getByTestId("modal-button");

    fireEvent.click(modal);
    expect(onClose).toBeCalled();
  });
});
