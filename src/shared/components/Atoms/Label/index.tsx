import React from "react";
import styled from "styled-components";

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

const Label: React.FC<React.PropsWithChildren<LabelProps>> = ({ children }) => {
  return <LabelWrapper data-testid="label">{children}</LabelWrapper>;
};

const LabelWrapper = styled.label`
  font-size: 14px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.text2};
`;

export default React.memo(Label);
