import React from "react";
import styled, { css } from "styled-components";
import companyIcon from "../../../images/company-icon.png";

export enum AvatarType {
  rounded = "rounded",
  square = "square",
  circle = "circle",
}

interface AvatarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  src?: string;
  name: string;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null;
  type?: AvatarType;
}

const Avatar: React.FC<AvatarProps> = ({
  src = companyIcon,
  name = "Logo",
  type,
  ...rest
}) => {
  return (
    <AvatarWrapper type={type} data-testid="avatar" {...rest}>
      <img src={src} alt={name} />
    </AvatarWrapper>
  );
};

interface AvatarWrapperProps {
  type?: AvatarType;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: 60px;
  height: 60px;
  border: 2px solid ${(props) => props.theme.colors.white};

  img {
    width: 100%;
  }

  ${(props) => {
    switch (props.type) {
      case AvatarType.square:
        return css`
          &,
          & > img {
            border-radius: 0;
          }
        `;
      case AvatarType.circle:
        return css`
          &,
          & > img {
            border-radius: 100%;
          }
        `;

      default:
        return css`
          &,
          & > img {
            border-radius: 6px;
          }
        `;
    }
  }}
`;

export default React.memo(Avatar);
