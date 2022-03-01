import React, { MouseEvent } from "react";

export interface ButtonProps {
  variant?:
    | "outlined"
    | "fill"
    | "text"
    | "icon"
    | "submit"
    | "logout"
    | "full-width"
    | "text-danger";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
  isActive?: boolean;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "outlined",
  isActive,
  className = "",
  ...props
}) => (
  <button
    className={`button-${variant} ${isActive ? "active" : ""} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
