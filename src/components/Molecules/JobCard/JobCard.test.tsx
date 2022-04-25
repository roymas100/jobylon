import { fireEvent, render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import JobCard from "./index";
import { jobExample } from "./jobExample";

const onClick = jest.fn();

describe("JobCard component", () => {
  it("Should be able to render the component", () => {
    render(<JobCard job={jobExample} onClick={onClick} />, { wrapper: Hooks });

    const jobCard = screen.getByTestId("job-card");
    expect(jobCard).toBeInTheDocument();

    expect(screen.getByText(jobExample.title)).toBeInTheDocument();
    expect(screen.getByText(jobExample.company.name)).toBeInTheDocument();

    const time = screen.getByTestId("job-card-time-posted");
    expect(time).toBeInTheDocument();

    fireEvent.click(jobCard);
    expect(onClick).toBeCalled();
  });
});
