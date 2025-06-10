import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface NavitemProps {
  label: string;
  path: string;
  action: () => void;
}

const Navitem = ({ label, path, action }: NavitemProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === path) {
      document.title = `LostInDusk | ${label}`;
      action();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <button
      onClick={action}
      className={`ring-primary hover:bg-secondary min-w-[6rem] -skew-x-6 cursor-pointer px-4 py-2 text-lg underline-offset-4 transition-colors duration-200 ease-in-out hover:shadow-[8px_8px_0px_0px_black] ${pathname === path || (path === "/blog" && pathname.startsWith("/blog")) ? "bg-primary! text-black underline underline-offset-4 shadow-[8px_8px_0px_0px_black]" : ""}`}
    >
      {label}
    </button>
  );
};

export default Navitem;
