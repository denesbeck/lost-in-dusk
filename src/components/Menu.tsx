import { ReactElement, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCheckBrowser } from "@/hooks";

interface MenuProps {
  children: ReactElement;
}

const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const browser = useCheckBrowser();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`z-50 p-1 ${!isOpen && "ring-1 hover:bg-gray-800"} ring-slate-200 transition-colors duration-200 ease-in-out`}
      >
        <RxHamburgerMenu
          className={`text-3xl transition-all duration-200 ease-in-out ${isOpen && "rotate-90"}`}
        />
      </button>
      {isOpen && (
        <div
          className={`fixed left-0 top-0 flex h-screen w-screen animate-textFocus flex-col items-center justify-center space-y-4 p-8 ${browser === "Safari" ? "bg-gray-900" : "bg-gray-900/30 backdrop-blur-md backdrop-brightness-90"}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Menu;
