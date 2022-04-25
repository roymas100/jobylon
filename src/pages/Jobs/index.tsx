import axios from "axios";
import React, { useState } from "react";
import { useMemo } from "react";
import { useQuery } from "react-query";
import JobList from "src/components/Organisms/JobList";
import JobsFilter from "src/components/Organisms/JobsFilter";
import JobsModel from "src/models/jobs.model";
import styled from "styled-components";
import CenteredContainer from "../../components/Templates/CenteredContainer";

export interface SelectedJobs {
  [key: string]: string[];
}

const Jobs: React.FC = () => {
  const getJobs = async () => {
    const response = await axios.get<JobsModel[]>(
      "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json"
    );

    return response.data;
  };

  const { data: jobs, isLoading, isError, refetch } = useQuery("jobs", getJobs);

  const [selectedJobs, setSelectedJobs] = useState<SelectedJobs>({});

  const filteredJobs = useMemo(() => {
    if (!jobs) {
      return undefined;
    }

    let filtered = jobs;

    Object.keys(selectedJobs).forEach((path) => {
      filtered = jobs.filter((job) =>
        selectedJobs[path].some((value) => value === job[path])
      );
    });

    return filtered;
  }, [jobs, selectedJobs]);

  return (
    <CenteredContainer>
      <PageContainer>
        <JobsFilter
          jobs={jobs}
          setSelectedJobs={setSelectedJobs}
          selectedJobs={selectedJobs}
        />
        <JobList
          isError={isError}
          isLoading={isLoading}
          refetch={refetch}
          jobs={filteredJobs}
        />
      </PageContainer>
    </CenteredContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export default Jobs;
