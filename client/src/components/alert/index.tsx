import React from "react";

const Alert: React.FC<{
  severity?: "fail" | "info" | "warning";
  className?: string;
  children: any;
}> = ({ severity, className, children }) => (
  <div
    className={`alert-container ${severity} ${className}`}
    data-testid="alert"
  >
    {children}
  </div>
);

export default Alert;
