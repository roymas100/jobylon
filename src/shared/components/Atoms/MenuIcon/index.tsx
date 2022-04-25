import React from "react";
import styled, { css } from "styled-components";

interface MenuIconProps {
  open: boolean;
  onClick: (value: boolean) => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ open, onClick }) => {
  return (
    <Wrapper open={open} onClick={() => onClick(!open)} data-testid="menuIcon">
      <div className="menu-bars up" data-testid="up" />
      <div className="menu-bars middle" data-testid="middle" />
      <div className="menu-bars down" data-testid="down" />
    </Wrapper>
  );
};

interface WrapperProps {
  open: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.5s ease-in-out;
  border: 3px solid #fff;

  background-color: transparent;
  .menu-bars {
    width: 35px;
    height: 5px;
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  .up,
  .down {
    width: 25px;
  }

  .middle {
    margin: 6px 0;
  }

  ${(props) =>
    props.open &&
    css`
      .middle {
        box-shadow: none;
        background-color: transparent;
      }

      .up {
        width: 35px;
        transform: rotate(45deg) translate(8px, 8px);
      }

      .down {
        width: 35px;
        transform: rotate(-45deg) translate(8px, -8px);
      }
    `}
`;

export default React.memo(MenuIcon);
