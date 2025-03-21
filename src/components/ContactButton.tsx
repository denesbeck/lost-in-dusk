import { FaArrowCircleRight } from "react-icons/fa";

interface ContactButtonProps {
  label: string;
  action: () => void;
}

const ContactButton = ({ label, action }: ContactButtonProps) => {
  return (
    <button
      onClick={action}
      className={`animate-text-focus mt-6 flex cursor-pointer items-center px-3 py-2 text-teal-400 ring-2 ring-teal-400 transition-colors duration-200 ease-in-out hover:bg-teal-400 hover:text-slate-800`}
    >
      {label}
      <FaArrowCircleRight className="inline ml-2 text-xl" />
    </button>
  );
};

export default ContactButton;
