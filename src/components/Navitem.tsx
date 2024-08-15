import { useLocation, useNavigate } from "react-router-dom";

interface NavitemProps {
  label: string;
  path: string;
}

const Navitem = ({ label, path }: NavitemProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(path);
      }}
      className={`min-w-[6rem] -skew-x-6 cursor-pointer px-4 py-2 text-lg underline-offset-4 transition-colors duration-200 ease-in-out hover:bg-slate-700 hover:shadow-[8px_8px_0px_0px_black] ${pathname === path ? "!bg-teal-500 underline underline-offset-4 shadow-[8px_8px_0px_0px_black]" : ""}`}
    >
      {label}
    </button>
  );
};

export default Navitem;
