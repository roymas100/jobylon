import React, { useMemo } from "react";
import JobsModel from "src/shared/models/jobs.model";
import Avatar from "../../Atoms/Avatar";
import { GrLocation } from "react-icons/gr";
import { BiBuildings } from "react-icons/bi";
import moment from "moment";
import { Wrapper } from "./styled";

interface JobCardProps {
  job: JobsModel;
  onClick: (job: JobsModel) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const locations = useMemo(() => {
    const pLocations = job.locations.map((l) => l.location.country);

    return pLocations.join(", ");
  }, [job]);

  return (
    <Wrapper onClick={() => onClick(job)} data-testid="job-card">
      <div className="avatar-container">
        <Avatar src={job.company.logo} name={job.company.name} />
      </div>

      <div className="info-container">
        <div className="card-header">
          <p className="title" aria-label={job.title}>
            {job.title}
          </p>
          <p className="time-posted" data-testid="job-card-time-posted">
            {moment(job.from_date).fromNow()}
          </p>
        </div>
        <div className="name" aria-label={job.company.name}>
          <BiBuildings size={12} style={{ marginRight: 2 }} />{" "}
          {job.company.name}
        </div>
        {locations && (
          <div className="location" aria-label={locations}>
            <GrLocation size={12} style={{ marginRight: 2 }} /> {locations}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default JobCard;
