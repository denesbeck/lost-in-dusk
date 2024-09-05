interface ButtonProps {
  label: string;
  action: () => void;
}

const Button = ({ label, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className="py-2 px-4 mt-8 font-semibold text-gray-900 bg-teal-400 ring-2 ring-teal-400 transition-colors duration-200 ease-in-out hover:text-teal-400 hover:bg-gray-900 active:text-teal-400 active:bg-gray-800 hover:shadow-[10px_10px_0px_0px_black] active:shadow-[10px_10px_0px_0px_black]"
    >
      {label}
    </button>
  );
};

export default Button;
