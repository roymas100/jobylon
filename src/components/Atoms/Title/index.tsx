import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  color?: string;
  ref?:
    | ((instance: HTMLParagraphElement | null) => void)
    | React.RefObject<HTMLParagraphElement>
    | null;
}

const Title: React.FC<PropsWithChildren<TitleProps>> = ({
  color,
  children,
  ...props
}) => {
  return (
    <Wrapper color={color} data-testid="title" {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || props.theme.colors.primary};
`;

export default React.memo(Title);
