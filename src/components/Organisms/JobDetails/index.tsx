import React from "react";
import Avatar, { AvatarType } from "src/components/Atoms/Avatar";
import Subtitle from "src/components/Atoms/Subtitle";
import Modal from "src/components/Atoms/Modal";
import Title from "src/components/Atoms/Title";
import JobsModel from "src/models/jobs.model";
import {
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlinePhone,
} from "react-icons/hi";
import Divider from "src/components/Atoms/Divider";
import { useCallback } from "react";
import { DetailsWrapper } from "./styles";
import Button from "src/components/Atoms/Button";

interface JobDetailsProps {
  job?: JobsModel | null;
  closeJobDetails: (data: null) => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, closeJobDetails }) => {
  const EmptyCover = useCallback(() => {
    return (
      <div style={{ maxWidth: "480px" }} data-testid="job-detail-empty">
        <div style={{ width: "480px", height: "130px", background: "gray" }} />
      </div>
    );
  }, []);

  return (
    <Modal show={!!job} onClose={() => closeJobDetails(null)}>
      {!job && <EmptyCover />}
      {!!job && (
        <DetailsWrapper data-testid="job-detail">
          {job.company?.cover ? (
            <img src={job.company.cover} alt={job.company.name} />
          ) : (
            <EmptyCover />
          )}
          <div className="details-body">
            <Avatar
              type={AvatarType.circle}
              name={job.company.name}
              src={job.company.logo}
              style={{
                position: "absolute",
                top: "-30px",
                alignSelf: "center",
              }}
            />

            <div className="title">
              <Title>{job.title}</Title>
            </div>

            {job.contact && (
              <div className="info">
                {job.contact.email && (
                  <div className="label-icon">
                    <HiOutlineMail size={18} />
                    <p>{job.contact.email}</p>
                  </div>
                )}
                {job.contact.phone && (
                  <div className="label-icon">
                    <HiOutlinePhone size={18} />
                    <p>{job.contact.phone}</p>
                  </div>
                )}
              </div>
            )}

            <Divider />

            {job.company && (
              <div className="info">
                <Subtitle>Company information</Subtitle>
                {job.company.name && (
                  <div className="label-icon">
                    <HiOutlineOfficeBuilding size={18} />{" "}
                    <p>{job.company.name}</p>
                  </div>
                )}
                {job.company.descr && (
                  <div
                    dangerouslySetInnerHTML={{ __html: job.company.descr }}
                  />
                )}
              </div>
            )}

            <Divider />

            <div className="info">
              <Subtitle>Experiece level</Subtitle>
              <p>{job.experience}</p>

              <Subtitle>Function</Subtitle>
              <p>{job.function}</p>

              <Subtitle>Description</Subtitle>
              <p dangerouslySetInnerHTML={{ __html: job.descr }} />

              <Subtitle>Skills required</Subtitle>
              <p dangerouslySetInnerHTML={{ __html: job.skills }} />
            </div>

            <Divider />

            <div className="fixed-button-flex">
              <Button onClick={() => window.open(job.urls.ad)}>
                More details
              </Button>
              <Button onClick={() => window.open(job.urls.apply)}>
                Apply for this job
              </Button>
            </div>
          </div>
        </DetailsWrapper>
      )}
    </Modal>
  );
};

export default JobDetails;
