import React from "react";
import Skeleton from "react-loading-skeleton";

// import { Container } from './styles';

const JobCardSkeleton: React.FC = () => {
  return (
    <Skeleton
      height={84}
      style={{ margin: 8, borderRadius: 8, flexGrow: 1 }}
      count={3}
    />
  );
};

export default JobCardSkeleton;
