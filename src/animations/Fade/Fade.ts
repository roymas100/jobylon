import { keyframes } from "styled-components";

export const FadeIn = keyframes`
     0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
     0% {
    visibility: visible;
    opacity: 1;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;
