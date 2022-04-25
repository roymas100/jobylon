import { render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import JobDetail from "./index";
import jobsExample from "../JobList/jobsExample";

describe("JobDetail component", () => {
  it("Should be able to render the job detail modal empty", () => {
    render(<JobDetail closeJobDetails={() => {}} />, {
      wrapper: Hooks,
    });

    const jobDetail = screen.getByTestId("job-detail-empty");
    expect(jobDetail).toBeInTheDocument();
  });

  it("Should be able to render the job detail modal", () => {
    render(<JobDetail closeJobDetails={() => {}} job={jobsExample[0]} />, {
      wrapper: Hooks,
    });

    const jobDetail = screen.getByTestId("job-detail");
    expect(jobDetail).toBeInTheDocument();
  });
});
