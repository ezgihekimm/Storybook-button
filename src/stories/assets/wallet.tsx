const WalletComponent = ({ classNames }: { classNames?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} fill="none">
    <path
      className={classNames}
      stroke="#25245C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.639 12.396H16.59a2.693 2.693 0 0 1-2.693-2.692 2.693 2.693 0 0 1 2.693-2.69h4.048M17.048 9.643h-.311"
    />
    <path
      stroke="#25245C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.748 1h8.643a5.248 5.248 0 0 1 5.248 5.248v7.177a5.248 5.248 0 0 1-5.248 5.247H6.748A5.248 5.248 0 0 1 1.5 13.425V6.248A5.248 5.248 0 0 1 6.748 1Z"
      clipRule="evenodd"
    />
    <path
      stroke="#25245C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.036 5.538h5.399"
    />
  </svg>
)
export default WalletComponent
