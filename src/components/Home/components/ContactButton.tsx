import { FaArrowCircleRight } from "react-icons/fa";

interface ContactButtonProps {
  label: string;
  action: () => void;
}

const ContactButton = ({ label, action }: ContactButtonProps) => {
  return (
    <button
      onClick={action}
      className="flex items-center py-2 px-3 mt-6 text-teal-400 ring-2 ring-teal-400 transition-colors duration-200 ease-in-out cursor-pointer hover:bg-teal-400 animate-text-focus backdrop-blur-md hover:text-slate-800"
    >
      {label}
      <FaArrowCircleRight className="inline ml-2 text-xl" />
    </button>
  );
};

export default ContactButton;
