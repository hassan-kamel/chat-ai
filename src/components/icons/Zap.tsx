import * as React from "react";

interface ZapProps extends React.SVGProps<SVGSVGElement> {}

export function Zap({
  width = 15,
  height = 20,
  fill = "currentColor",
  className,
  ...props
}: ZapProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.83337 7.5H14.5L6.16671 20V12.5H0.333374L7.83337 0V7.5ZM6.16671 9.16667V6.01719L3.27702 10.8333H7.83337V14.4953L11.3859 9.16667H6.16671Z"
        fill={fill}
      />
    </svg>
  );
}
