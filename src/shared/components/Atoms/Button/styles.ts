import { lighten } from "polished";
import Bubble from "src/shared/animations/Bubble/Bubble";
import bubbleUp from "src/shared/animations/Bubble/Bubble-up";
import styled, { css } from "styled-components";
import { ComponentState } from ".";

interface ButtonWrapperProps {
  state: ComponentState;
  buttonType: "primary" | "info" | "danger" | "warning" | "success" | "default";
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42rem;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;

  padding: 12px 16px;
  border-radius: 6px;
  margin: 0;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  cursor: pointer;

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${(props) => lighten(0.1, props.theme.colors.primary)};
  }

  ${(props) =>
    props.state === ComponentState.CLICK &&
    css`
      -webkit-animation: ${Bubble} ${0.8}s both;
      animation: ${Bubble} ${0.8}s both;
    `}

  ${(props) =>
    props.state === ComponentState.RENDERING &&
    css`
      -webkit-animation: ${bubbleUp} 0.8s both;
      animation: ${bubbleUp} 0.8s both;
    `}
  
    ${(props) =>
    props.state === ComponentState.WAITING &&
    css`
      -webkit-animation: none;
      animation: none;
    `}
  
      ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return css`
          background-color: ${props.theme.colors.primary};

          &:hover {
            background-color: ${lighten(0.1, props.theme.colors.primary)};
          }
        `;
      case "success":
        return css`
          background-color: ${props.theme.colors.success};

          &:hover {
            background-color: ${lighten(0.1, props.theme.colors.success)};
          }
        `;
      case "info":
        return css`
          background-color: ${props.theme.colors.info};
          &:hover {
            background-color: ${lighten(0.1, props.theme.colors.info)};
          }
        `;
      case "danger":
        return css`
          background-color: ${props.theme.colors.danger};
          &:hover {
            background-color: ${lighten(0.1, props.theme.colors.danger)};
          }
        `;
      case "warning":
        return css`
          background-color: ${props.theme.colors.warning};
          &:hover {
            background-color: ${lighten(0.1, props.theme.colors.warning)};
          }
        `;
      default:
        return css`
          background-color: ${props.theme.colors.white};
          color: ${props.theme.colors.primary};
          border: 1px solid ${props.theme.colors.primary};
          &:hover {
            background-color: ${props.theme.colors.primary};
            color: ${props.theme.colors.white};
          }
        `;
    }
  }}
`;
