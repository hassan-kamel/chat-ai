import * as React from "react";

interface SparklesProps extends React.SVGProps<SVGSVGElement> {}

export function Sparkles({
  width = 17,
  height = 16,
  fill = "currentColor",
  className,
  ...props
}: SparklesProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12.4727 0.505371L13.3885 2.22261L15.1058 3.13848L13.3885 4.05434L12.4727 5.77157L11.5568 4.05434L9.83957 3.13848L11.5568 2.22261L12.4727 0.505371ZM8.0745 6.14773L11.5467 7.9996L8.0745 9.85141L6.22266 13.3236L4.37081 9.85141L0.89859 7.9996L4.37081 6.14773L6.22266 2.67551L8.0745 6.14773ZM8.59534 7.9996L7.04794 7.17432L6.22266 5.6269L5.39738 7.17432L3.84998 7.9996L5.39738 8.82488L6.22266 10.3722L7.04794 8.82488L8.59534 7.9996ZM14.3245 11.0088L13.1671 8.8387L12.0097 11.0088L9.83957 12.1663L12.0097 13.3236L13.1671 15.4938L14.3245 13.3236L16.4946 12.1663L14.3245 11.0088Z"
        fill={fill}
      />
    </svg>
  );
}
