export const Download = ({
  width = 40,
  height = 40,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={`icon icon-tabler icon-tabler-download ${className}`}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
    <path d="M7 11l5 5l5 -5"></path>
    <path d="M12 4l0 12"></path>
  </svg>
);
