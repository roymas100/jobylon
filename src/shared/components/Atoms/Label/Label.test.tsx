import { render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import Label from "./index";

describe("Label component", () => {
  it("Should be able to render a label", () => {
    render(<Label>test</Label>, { wrapper: Hooks });

    const label = screen.getByTestId("label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("test");
  });
});
