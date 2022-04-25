import React from "react";
import styled from "styled-components";

const Subtitle: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return <SubtitleWrapper data-testid="subtitle">{children}</SubtitleWrapper>;
};

const SubtitleWrapper = styled.p`
  font-size: 16px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.primary};
`;

export default React.memo(Subtitle);
