import { transparentize } from "polished";
import styled, { css } from "styled-components";

interface WrapperProps {
  open: boolean;
}

export const Wrapper = styled.nav<WrapperProps>`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  display: flex;
  flex-direction: row;
  transition: all 0.5s;
  z-index: 2;

  .menu-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    width: 100%;

    border-bottom: 1px solid
      ${(props) => transparentize(0.9, props.theme.colors.black)};

    @media (max-width: 480px) {
      ${(props) =>
        props.open &&
        css`
          position: fixed;
          top: 0;
        `}
    }
  }

  @media (max-width: 480px) {
    ${(props) =>
      props.open &&
      css`
        height: 100vh;
        position: fixed;
        top: 0;
      `}
  }

  .logo {
    flex-grow: 1;
    margin: 0 16px;
    height: 100%;

    display: flex;
    align-items: center;
    span {
      cursor: pointer;

      display: flex;
      height: 100%;
      align-items: center;
      img {
        height: 80%;
      }
    }
  }

  .links {
    flex-grow: 2;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 480px) {
      visibility: hidden;
    }
  }

  a {
    text-decoration: none;
    transition: all 0.2s;
    color: ${(props) => props.theme.colors.text2};
    margin: 0 8px;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .menu-button {
    transition: none;
    @media (min-width: 480px) {
      visibility: hidden;
    }
  }

  .opened-menu-links {
    @media (min-width: 480px) {
      display: none;
    }

    ${(props) =>
      !props.open &&
      css`
        opacity: 0;
        width: 0;
        height: 0;
      `}

    ${(props) =>
      props.open &&
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: all 0.5s;
        transition-delay: 0.5s;

        width: 100%;
        a {
          margin: 8px;
          font-size: 32px;
          white-space: nowrap;
        }
      `}
  }
`;
