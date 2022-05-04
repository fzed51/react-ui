import React, { FC, MouseEvent, SyntheticEvent, useCallback } from "react";

export interface BasicButtonProps {
  onClick?: (e: MouseEvent) => void;
  submitter?: boolean;
}

export const BasicButton: FC<BasicButtonProps> = ({
  children,
  onClick,
  submitter,
}) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!submitter) {
        e.preventDefault();
      }
      onClick && onClick(e);
    },
    [onClick, submitter]
  );
  return (
    <button onClick={handleClick} type={submitter ? "submit" : "button"}>
      {children}
    </button>
  );
};

export default BasicButton;
