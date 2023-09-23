const SvgComponent = ({ classNames }: { classNames?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 animate-spin"
  >
    <path
      fill="#fff"
      d="M20.672 14.409a9 9 0 1 0-7.16 6.463l-.408-2.395a6.57 6.57 0 1 1 5.226-4.718l2.342.65Z"
    />
  </svg>
)
export default SvgComponent
