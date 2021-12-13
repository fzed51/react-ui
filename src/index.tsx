import React, { FC, MouseEvent } from "react";
import "./style.scss";

export interface ButtonProps {
  onClick?: (e: MouseEvent) => void;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  const handleClick = (e: MouseEvent) => {
    if (onClick !== undefined) {
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <button className="ui-btn" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
