import * as React from "react";

interface ChatProps extends React.SVGProps<SVGSVGElement> {}

export function Chat({
  width = 16,
  height = 18,
  fill = "currentColor",
  className,
  ...props
}: ChatProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M14.6667 17.3333H1.33333C0.8731 17.3333 0.5 16.9602 0.5 16.5V1.49996C0.5 1.03973 0.8731 0.666626 1.33333 0.666626H14.6667C15.1269 0.666626 15.5 1.03973 15.5 1.49996V16.5C15.5 16.9602 15.1269 17.3333 14.6667 17.3333ZM13.8333 15.6666V2.33329H2.16667V15.6666H13.8333ZM4.66667 4.83329H11.3333V6.49996H4.66667V4.83329ZM4.66667 8.16663H11.3333V9.83329H4.66667V8.16663ZM4.66667 11.5H8.83333V13.1666H4.66667V11.5Z"
        fill={fill}
      />
    </svg>
  );
}
