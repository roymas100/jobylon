import React, { useCallback } from "react";
import { useMemo } from "react";
import Checkbox from "src/shared/components/Atoms/Checkbox";
import Label from "src/shared/components/Atoms/Label";
import JobsModel from "src/shared/models/jobs.model";
import { SelectedJobs } from "src/pages/Jobs";
import styled from "styled-components";

interface CheckboxListProps {
  selectedJobs: SelectedJobs;
  setSelectedJobs: (data: SelectedJobs) => void;
  path: string;
  title: string;
  jobs?: JobsModel[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({
  selectedJobs,
  path,
  title,
  jobs,
  setSelectedJobs,
}) => {
  const keys = useMemo(() => {
    if (!jobs) {
      return undefined;
    }

    const array = jobs.map((job) => job[path]);

    const uniq = Array.from(new Set(array));

    return uniq;
  }, [jobs, path]);

  const handleCheckBox = useCallback(
    (path: string, value: string) => {
      const newObj = { ...selectedJobs };

      if (!newObj[path]) {
        newObj[path] = [value];
      } else if (newObj[path].some((v) => v === value)) {
        const prov = newObj[path].filter((v) => v !== value);

        if (prov.length > 0) {
          newObj[path] = prov;
        } else {
          delete newObj[path];
        }
      } else {
        newObj[path] = newObj[path].concat([value]);
      }

      setSelectedJobs(newObj);
    },
    [selectedJobs, setSelectedJobs]
  );

  return (
    <>
      <Label>{title}</Label>
      <CheckboxListWrapper>
        {keys?.map((key) => (
          <Checkbox
            key={"filter" + key}
            label={key}
            checked={!!selectedJobs[path]?.some((value) => value === key)}
            name={path}
            value={key}
            onChange={(value) => handleCheckBox(path, value)}
          />
        ))}
      </CheckboxListWrapper>
    </>
  );
};

const CheckboxListWrapper = styled.div`
  margin-top: 8px;
`;

export default React.memo(CheckboxList);
