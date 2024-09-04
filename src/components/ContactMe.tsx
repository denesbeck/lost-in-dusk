import { FaArrowCircleRight } from "react-icons/fa";

interface ContactMeProps {
  action: () => void;
}

const ContactMe = ({ action }: ContactMeProps) => {
  return (
    <button
      onClick={action}
      className={`mt-6 flex animate-textFocus items-center px-3 py-2 text-teal-400 ring-2 ring-teal-400 transition-colors duration-200 ease-in-out hover:bg-teal-400 hover:text-slate-800`}
    >
      Contact me
      <FaArrowCircleRight className="ml-2 inline text-xl" />
    </button>
  );
};

export default ContactMe;
