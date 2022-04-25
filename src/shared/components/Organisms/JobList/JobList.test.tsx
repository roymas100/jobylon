import { fireEvent, render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import JobList from "./index";

import jobsExample from "./jobsExample";

const onClickWhenError = jest.fn();

describe("JobList component", () => {
  it("Should be able to render a jobList", () => {
    render(<JobList refetch={() => {}} jobs={jobsExample} />, {
      wrapper: Hooks,
    });

    const jobList = screen.getByTestId("job-list");
    expect(jobList).toBeInTheDocument();
  });

  it("Should be able to render the jobList error", () => {
    render(<JobList isError refetch={onClickWhenError} jobs={jobsExample} />, {
      wrapper: Hooks,
    });

    const jobList = screen.getByTestId("list-error");
    expect(jobList).toBeInTheDocument();
    const jobListErrorButton = screen.getByTestId("button");

    fireEvent.click(jobListErrorButton);
    expect(onClickWhenError).toBeCalled();
  });

  it("Should be able to render the jobList empty list", () => {
    render(<JobList refetch={() => {}} jobs={[]} />, {
      wrapper: Hooks,
    });

    const jobList = screen.getByAltText("List is empty");
    expect(jobList).toBeInTheDocument();
  });

  it("Should be able to render the jobList loading", () => {
    render(<JobList isLoading refetch={() => {}} jobs={jobsExample} />, {
      wrapper: Hooks,
    });
    const jobList = screen.getByTestId("job-card-skeletons");
    expect(jobList).toBeInTheDocument();
  });
});
