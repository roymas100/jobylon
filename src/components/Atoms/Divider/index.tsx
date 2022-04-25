import { transparentize } from "polished";
import React from "react";
import styled from "styled-components";

const Divider: React.FC = () => {
  return <Wrapper data-testid="divider" />;
};

const Wrapper = styled.div`
  margin: 12px 0;

  width: 100%;

  border: 1px solid ${(props) => transparentize(0.8, props.theme.colors.text)};
`;

export default React.memo(Divider);
