import { render, screen } from "@testing-library/react";
import EmptyList from "./index";
import emptyImg from "src/shared/images/empty.svg";
import Hooks from "../../../hooks";

describe("render empty list component", () => {
  it("should be able to render page", () => {
    render(<EmptyList />, { wrapper: Hooks });

    const container = screen.getByTestId("empty-list");
    const message = screen.getByTestId("title");
    const img = screen.getByAltText("List is empty");

    expect(container).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe(emptyImg);
    expect(message).toHaveTextContent("List is empty");
  });
});
