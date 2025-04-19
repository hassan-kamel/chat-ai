import * as React from "react";

interface AssistantProps extends React.SVGProps<SVGSVGElement> {}

export function Assistant({
  width = 20,
  height = 20,
  fill = "currentColor",
  className,
  ...props
}: AssistantProps) {
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
        d="M8 0H12C16.4183 0 20 3.58172 20 8C20 12.4183 16.4183 16 12 16V19.5C7 17.5 0 14.5 0 8C0 3.58172 3.58172 0 8 0ZM10 14H12C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2H8C4.68629 2 2 4.68629 2 8C2 11.61 4.46208 13.9656 10 16.4798V14Z"
        fill={fill}
      />
    </svg>
  );
}
