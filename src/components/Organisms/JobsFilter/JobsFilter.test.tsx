import { render, screen } from "@testing-library/react";
import Hooks from "../../../hooks";
import JobsFilter from "./index";
import jobsExample from "../JobList/jobsExample";

describe("JobFilter component", () => {
  it("Should be able to render the job filter modal", () => {
    render(
      <JobsFilter
        selectedJobs={{}}
        setSelectedJobs={() => {}}
        jobs={jobsExample}
      />,
      {
        wrapper: Hooks,
      }
    );

    const button = screen.getByTestId("job-filter-button");
    const filter = screen.getByTestId("job-filter");
    expect(button).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
  });
});
