import React, { RefObject, useState } from "react";
import { ButtonWrapper } from "./styles";

export enum ComponentState {
  RENDERING = "RENDERING",
  WAITING = "WAITING",
  CLICK = "ONCLICK",
  HOVER = "HOVER",
}

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  ref?:
    | ((instance: HTMLButtonElement | null) => void)
    | RefObject<HTMLButtonElement>
    | null;
  buttonType?:
    | "primary"
    | "info"
    | "danger"
    | "warning"
    | "success"
    | "default";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  buttonType = "primary",
  ...props
}) => {
  const [state, setState] = useState<ComponentState>(ComponentState.RENDERING);

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);

    setState(ComponentState.CLICK);
    setTimeout(() => {
      setState(ComponentState.WAITING);
    }, 8 * 100);
  };

  return (
    <ButtonWrapper
      state={state}
      onClick={handleOnClick}
      buttonType={buttonType}
      data-testid="button"
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

export default React.memo(Button);
