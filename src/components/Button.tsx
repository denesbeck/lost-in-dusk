import { Spinner } from ".";

interface ButtonProps {
  label: string;
  action: () => void;
  loading?: boolean;
}

const Button = ({ label, action, loading = false }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className="flex justify-center items-center py-2 px-4 mt-8 space-x-4 font-semibold text-gray-900 bg-teal-400 ring-2 ring-teal-400 transition-colors duration-200 ease-in-out cursor-pointer hover:text-teal-400 hover:bg-gray-900 active:text-teal-400 active:bg-gray-800 hover:shadow-[10px_10px_0px_0px_black] active:shadow-[10px_10px_0px_0px_black]"
    >
      {loading && <Spinner />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
