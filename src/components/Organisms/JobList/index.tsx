import React, { useState } from "react";
import EmptyList from "src/components/Molecules/EmptyList";
import JobCard from "src/components/Molecules/JobCard";
import JobCardSkeleton from "src/components/Molecules/JobCard/JobCardSkeleton";
import ListError from "src/components/Molecules/ListError";
import JobsModel from "src/models/jobs.model";
import styled from "styled-components";
import JobDetails from "../JobDetails";

interface JobListProps {
  isLoading?: boolean;
  isError?: boolean;
  refetch: () => void;
  jobs?: JobsModel[];
}

const JobList: React.FC<JobListProps> = ({
  isLoading = false,
  isError = false,
  refetch,
  jobs,
}) => {
  const [selectedJob, setSelectedJob] = useState<JobsModel | null>(null);

  if (isLoading) {
    return (
      <JobListContainer data-testid="job-card-skeletons">
        <JobCardSkeleton />
      </JobListContainer>
    );
  }

  if (isError) {
    return <ListError onClick={refetch} />;
  }

  if (jobs && jobs.length <= 0) {
    return <EmptyList />;
  }

  return (
    <JobListContainer data-testid="job-list">
      {jobs?.map((job) => (
        <JobCard key={job.id} job={job} onClick={setSelectedJob} />
      ))}

      <JobDetails job={selectedJob} closeJobDetails={setSelectedJob} />
    </JobListContainer>
  );
};

const JobListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  flex-grow: 1;
`;

export default JobList;
