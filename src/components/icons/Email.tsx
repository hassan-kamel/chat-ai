import * as React from "react";

interface EmailProps extends React.SVGProps<SVGSVGElement> {}

export function Email({
  width = 20,
  height = 20,
  fill = "currentColor",
  className,
  ...props
}: EmailProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0.24283 5.85419L9.4895 0.308428C9.8062 0.118478 10.2019 0.118548 10.5185 0.308618L19.7573 5.85416C19.9079 5.94453 20 6.10726 20 6.28286V18.9998C20 19.5521 19.5523 19.9998 19 19.9998H1C0.44772 19.9998 0 19.5521 0 18.9998V6.28298C0 6.10732 0.09218 5.94454 0.24283 5.85419ZM2 7.13244V17.9998H18V7.13197L10.0037 2.33221L2 7.13244ZM10.0597 12.6981L15.3556 8.23515L16.6444 9.7645L10.074 15.3016L3.36401 9.7715L4.63599 8.22813L10.0597 12.6981Z"
        fill={fill}
      />
    </svg>
  );
}
