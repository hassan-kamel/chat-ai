import * as React from "react";

interface SendIconProps extends React.SVGProps<SVGSVGElement> {}

export function SendIcon({
  width = 15,
  height = 15,
  fill = "currentColor",
  className,
  ...props
}: SendIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1.01839 5.13579C0.655517 5.01483 0.652656 4.81967 1.02586 4.69527L14.2802 0.277163C14.6471 0.15483 14.8576 0.360253 14.7548 0.72017L10.9679 13.9745C10.863 14.3415 10.6514 14.3542 10.4964 14.0053L8.00026 8.38902L12.1669 2.83344L6.61137 7.00013L1.01839 5.13579Z"
        fill={fill}
      />
    </svg>
  );
}
