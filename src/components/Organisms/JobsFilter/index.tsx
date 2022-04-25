import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { BsFilterLeft } from "react-icons/bs";

import JobsModel from "src/models/jobs.model";
import { SelectedJobs } from "src/pages/Jobs";
import CheckboxList from "./CheckboxList";
import { useState } from "react";
import { transparentize } from "polished";
import { handleClickOutside } from "src/utils/handleClickOutside";

interface JobsFilterProps {
  jobs?: JobsModel[];
  setSelectedJobs: (data: SelectedJobs) => void;
  selectedJobs: SelectedJobs;
}

const JobsFilter: React.FC<JobsFilterProps> = ({
  jobs,
  selectedJobs,
  setSelectedJobs,
}) => {
  const [opened, setOpened] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (opened) {
      handleClickOutside(modalRef, setOpened);
    }
  }, [modalRef, setOpened, opened]);

  return (
    <>
      <JobFilterButton
        onClick={() => setOpened(true)}
        data-testid="job-filter-button"
      >
        <BsFilterLeft size={24} />
      </JobFilterButton>

      <JobsFilterWrapper
        opened={opened}
        ref={modalRef}
        data-testid="job-filter"
      >
        <CheckboxList
          selectedJobs={selectedJobs}
          path="employment_type"
          title="Employment type"
          setSelectedJobs={setSelectedJobs}
          jobs={jobs}
        />
        <CheckboxList
          selectedJobs={selectedJobs}
          path="experience"
          title="Experience"
          setSelectedJobs={setSelectedJobs}
          jobs={jobs}
        />
      </JobsFilterWrapper>
    </>
  );
};

const JobFilterButton = styled.div`
  display: none;

  @media (max-width: 600px) {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;

    cursor: pointer;
    z-index: 1;

    margin-bottom: 12px;

    &:hover {
      background-color: ${(props) =>
        transparentize(0.1, props.theme.colors.primary)};
    }

    &:active {
      border: 1px solid ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

interface JobsFilterWrapperProps {
  opened: boolean;
}

const JobsFilterWrapper = styled.div<JobsFilterWrapperProps>`
  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 6px;

  max-width: 400px;
  margin-right: 12px;
  transition: all 0.5s;

  @media (max-width: 600px) {
    position: fixed;

    ${(props) =>
      !props.opened &&
      css`
        width: 0px;
        height: 0px;
        opacity: 0;
        z-index: 0;
      `}

    ${(props) =>
      props.opened &&
      css`
        opacity: 1;
        z-index: 1;
        max-width: 300px;
        max-height: 500px;


        outline: solid 800px ${transparentize(0.5, props.theme.colors.black)}};
      `}
  }
`;

export default JobsFilter;
