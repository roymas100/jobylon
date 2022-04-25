import { render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import Title from "./index";

describe("Title component", () => {
  it("Should be able to render a title", () => {
    render(<Title>Test</Title>, { wrapper: Hooks });

    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Test");
  });
});
