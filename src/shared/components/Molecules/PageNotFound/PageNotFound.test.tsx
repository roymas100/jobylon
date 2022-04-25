import { fireEvent, render, screen } from "@testing-library/react";
import PageNotFound from "./index";
import PageNotFoundImg from "src/shared/images/page_not_found.svg";
import Hooks from "../../../hooks";

const onClick = jest.fn();

describe("Not Found Page", () => {
  it("should be able to render page", () => {
    render(<PageNotFound />, { wrapper: Hooks });

    const container = screen.getByTestId("page-not-found");
    const message = screen.getByTestId("title");
    const img = screen.getByAltText("Page not found");

    expect(container).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe(PageNotFoundImg);
    expect(message).toHaveTextContent("Page not found!");
  });

  it("should be able to click", () => {
    render(<PageNotFound onClick={onClick} />, { wrapper: Hooks });

    const button = screen.getByTestId("button");

    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
