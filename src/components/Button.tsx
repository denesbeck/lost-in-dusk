import { Spinner } from ".";

interface ButtonProps {
  disabled?: boolean;
  label: string;
  action: () => void;
  loading?: boolean;
}

const Button = ({
  disabled = false,
  label,
  action,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      className="flex justify-center items-center py-2 px-4 space-x-4 font-semibold text-gray-900 bg-teal-400 ring-2 ring-teal-400 transition-colors duration-200 ease-in-out cursor-pointer min-w-[300px] hover:not-disabled:bg-gray-900 hover:not-disabled:text-teal-400 hover:not-disabled:shadow-[10px_10px_0px_0px_black] active:not-disabled:bg-gray-800 active:not-disabled:text-teal-400 active:not-disabled:shadow-[10px_10px_0px_0px_black] disabled:grayscale-100"
    >
      {loading && <Spinner />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
