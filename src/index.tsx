import React, { FC, MouseEvent } from "react";
import "./style.scss";

export interface ButtonProps {
  onClick?: (e: MouseEvent) => void;
}

export const ButtonCore: FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: MouseEvent) => {
    console.log("click");
    console.debug(onClick);
    if (onClick !== undefined) {
      console.log("click avaec props");
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <button type="button" className="ui-btn" onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default ButtonCore;
