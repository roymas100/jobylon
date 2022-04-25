import { render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import Subtitle from "./index";

describe("Subtitle component", () => {
  it("Should be able to render a subtitle", () => {
    render(<Subtitle>Test</Subtitle>, { wrapper: Hooks });

    const subtitle = screen.getByTestId("subtitle");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent("Test");
  });
});
